import Skill from "./Skill";
import { Col } from "react-bootstrap";

export default function Skills(props) {
  // looks in items for sockets and moves them to an array
  let groups = [];
  for (const socket of props.item.sockets) {
    if (socket.attr !== "A") groups.push(socket.group);
  }

  // linkedGroups outputs an array with the number of sockets linked together in the item
  let linkedGroups = [];
  let current = 0;
  let count = 0;
  for (const socket of groups) {
    if (socket === current) {
      count++;
    } else {
      linkedGroups.push(count);
      current = socket;
      count = 1;
    }
  }
  linkedGroups.push(count);

  // finalArray is the number of sockets linked together followed by 0s for the number of links ie [4,0,0,0,2,0]
  let finalArray = [];
  for (const link of linkedGroups) {
    let numberOfTimes = link;
    finalArray.push(link);
    while (numberOfTimes > 1) {
      finalArray.push(0);
      numberOfTimes--;
    }
  }

  const gems = props.gems.map((gem, gemIndex) => {
    if (!gem.abyssJewel) {
      return gem;
    }
  });

  // constructs the grid with links on the left and rows of gems on the right to hand to the render
  const builder = finalArray.map((connections, index) => {
    const gemColour = props.item.sockets[index].sColour;
    const gemSocket = gems.find((g) => g.socket === index);

    let level;
    let quality = null;
    if (gemSocket) {
      gemSocket.properties.map((property) => {
        if (property.name === "Level") {
          return (level = property.values[0][0].slice(0, 2));
        }
      });
      gemSocket.properties.map((property) => {
        if (property.name === "Quality") {
          return (quality = property.values[0][0].slice(1, 3));
        }
      });
    }

    if (gems.some((g) => g.socket === index)) {
      if (connections) {
        // if the grid needs to output a new link section and a gem
        return (
          <>
            <div className={"links span" + connections}></div>
            <div className="gemRow">
              <Skill gem={gemSocket} />{" "}
              <div className="gemName">
                {gemSocket.typeLine}{" "}
                <div className="gemStats">
                  (Level: {level} / Quality: {quality || "0"})
                </div>
              </div>
            </div>
          </>
        );
        // if there is a gem to output but not a new link section
      } else {
        return (
          <div className="gemRow">
            <Skill gem={gemSocket} />{" "}
            <div className="gemName">
              {gemSocket.typeLine}{" "}
              <div className="gemStats">
                (Level: {level} / Quality: {quality || "0"})
              </div>
            </div>
          </div>
        );
      }
    } else {
      // if there is a links section but an empty gem
      if (connections) {
        return (
          <>
            <div className={"links span" + connections}></div>
            <div className="gemRow empty">
              <div className={"socketColour" + gemColour} />
              Empty Socket
            </div>
          </>
        );
        // if there is no new links section and an empty gem
      } else {
        return (
          <div className="gemRow empty">
            <div className={"socketColour" + gemColour} />
            Empty Socket
          </div>
        );
      }
    }
  });

  return (
    <Col lg={3} xs={6} className="skills-container">
      <hr className="line" />
      <div className="gemGroup">{props.item.inventoryId}</div>
      <div className="skill-group">{builder}</div>
    </Col>
  );
}

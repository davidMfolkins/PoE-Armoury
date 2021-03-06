import Favourite from "./Favourite";

import { Table } from "react-bootstrap";
import "./Favourites.scss";

export default function Favourites(props) {
  const favouritesTable = props.favourites.map((fav) => {
    return (
      <Favourite
        fav={fav}
        removeFavourite={props.removeFavourite}
        getCharacter={props.getCharacter}
      />
    );
  });

  if (props.favourites.length > 0) {
    return (
      <div className="favouritePage">
        <div className="favourite-title">Favourited Builds</div>
        <div className="favourites-container">
          <Table id="favouriteTable" responsive bordered variant="dark">
            <thead>
              <tr className="d-flex">
                <th className="col-3">Class</th>
                <th className="col-3">Name</th>
                <th className="col-3">Level</th>
                <th className="col-3">Delete</th>
              </tr>
            </thead>
            <tbody>{favouritesTable}</tbody>
          </Table>
        </div>
      </div>
    );
  } else {
    return (
      <div className="noFavouritePage">
        <div className="no-favourites" style={{ textAlign: "center" }}>
          You have no favourited builds
        </div>
      </div>
    );
  }
}

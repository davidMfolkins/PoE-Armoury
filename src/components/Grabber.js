import axios from 'axios'
import { useEffect } from 'react'
const ladder_standard = require('../ladder_standard.json');
const ladder_hardcore = require('../ladder_hardcore.json');


export default function Grabber(props) {

  let hardcoreCounter = 0;
  let standardCounter = 0;

  const cancelToken = axios.CancelToken;
  const source = cancelToken.source();

  useEffect(() => {

    if (props.grab) {

      console.log('grabbing...')

      ladder_hardcore.entries.forEach((entry, i) => {
        setTimeout(() => {
          axios.get(`http://localhost:3030/accounts/${entry.account.name}/characters/${entry.character.name}`,
            { cancelToken: source.token })
            .then((res) => {
              hardcoreCounter++;
              console.log(res.data)
              console.log('hardcore: ', hardcoreCounter)
            })
        }, i * 10000);

      })

      ladder_standard.entries.forEach((entry, x) => {
        setTimeout(() => {
          axios.get(`http://localhost:3030/accounts/${entry.account.name}/characters/${entry.character.name}`).then((res) => {
            console.log(res.data)
            console.log('standard: ', x + 1)
          })
        }, x * 11000);

      })
    } else {
      console.log('terminating grab')
      return () => {
        source.cancel("axios request cancelled");
      }
    }


  }, [props.grab])


  return <div />
}
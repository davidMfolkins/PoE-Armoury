import Axios from "axios"
import axios from 'axios'
import { useEffect, useState } from "react"


export default function Items (props) {

  const [items, setItems ] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3030/items')
    .then((data) => setItems(data.data[0]))
    .catch((err) => console.log(err))
  }, [])

  if (items) {
    items.items.items.map((item) => {
      console.log(item.name)
    })
  }
    
  return <div />
}

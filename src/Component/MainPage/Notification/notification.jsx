import React from 'react'
import "./notification.scss"
import axios from "axios";

const Notification = ({ count }) => {
  const url = "http://localhost:3000"
  const [dataNotification, setNotification] = useState([])

  useEffect(() => {
    axios.get(`${url}/activites/activity_types/:sport${sport}`).then((res) => {
      setNotification(res.data)
    })
  },[])

  if (count <= 0) {
    return undefined
  }
  return (
    <div className='notification'>
      <span className='circle-count'>{count}</span>
    </div>
  )
}

export default Notification
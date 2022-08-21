import React, { useEffect, useState } from 'react';
import './Useronline.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useColorScheme } from '@mui/material';

// const users = [
//   {
//     name: 'ploy'
//   },
//   {
//     name: 'mint'
//   },
//   {
//     name: 'chompoo'
//   },
//   {
//     name: 'hiang'
//   },
//   {
//     name: 'Tinky Winky'
//   },
//   {
//     name: 'Dipsy'
//   },
//   {
//     name: 'Laa Laa'
//   }
// ]


function Useronline() {
  const [users,setUsers] = useState([])
  

  useEffect(()=>{
    axios.get('http://localhost:3000/users/').then((results)=>{

      // console.log(results);
      // const username = results.data.username
      // const newArray = results.data.map(result => {
      //   username.push(result.username)
      // })
      // console.log(newArray)
      // setUser(username);

      setUsers(results.data)
    })
  }, [])
  console.log(users)

  return (
    <div className='Useronline'><List>
      {users.map((user, idx) =>
        <ListItem key={idx}>
          <ListItemAvatar>
            {/* <Avatar alt="" src="#" /> */}
            <Avatar alt="" src={user.user_photo} />
          </ListItemAvatar>
          <ListItemText primary={user.username} />
        </ListItem>
      )}
      <div className='Seemore'>
        <Fab size="small" color="#46469C" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </List>
    </div>
  )
}

export default Useronline
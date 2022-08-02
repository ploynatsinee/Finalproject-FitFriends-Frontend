import React from 'react';
import './Useronline.scss';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const users = [
  {
    name: 'ploy'
  },
  {
    name: 'mint'
  },
  {
    name: 'chompoo'
  },
  {
    name: 'hiang'
  },
  {
    name: 'Tinky Winky'
  },
  {
    name: 'Dipsy'
  },
  {
    name: 'Laa Laa'
  }
]


function Useronline() {
  return (
    <div className='Useronline'><List>
      {users.map((user, idx) =>
        <ListItem key={idx}>
          <ListItemAvatar>
            <Avatar alt="" src="#" />
          </ListItemAvatar>
          <ListItemText primary={user.name} />
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
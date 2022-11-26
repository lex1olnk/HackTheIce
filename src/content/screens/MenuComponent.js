import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthorized } from '../store/tasks';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { buttonsCheck } from './Functions'
const MenuComponent = () => {
    const dispatch = useDispatch();
    const name = "Baptised by Marshall"
    return (
      <div>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <nav aria-label="main mailbox folders">
            <List
              subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                      {name}
                  </ListSubheader>
                  }
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Профиль" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DraftsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Мои достижения" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
          <Divider />
          <nav aria-label="secondary mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                  <ListItemText 
                    primary="Выйти" 
                    onClick={() => {
                      buttonsCheck()
                      dispatch(setAuthorized({
                        authorized: false,
                        level: -1
                    }))
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </div>
    
    );
}

export default MenuComponent;
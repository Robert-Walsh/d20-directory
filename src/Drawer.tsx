import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { GiHamburgerMenu } from 'react-icons/gi';
import { StoreName } from './Types';
import { FaBridge } from "react-icons/fa6";
import { GiStagHead } from "react-icons/gi";


interface Props {
  setSelectedStore: (store: StoreName) => void
}

export default function D20Drawer({ setSelectedStore }: Props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[StoreName.Watford, StoreName.Uxbridge].map((store, index) => (
          <ListItem key={store} disablePadding>
            <ListItemButton onClick={() => setSelectedStore(store)}>
              <ListItemIcon>
                {index % 2 === 0 ? <GiStagHead size="33px" color='#7f8c8d'/> : <FaBridge size="30px" color='#7f8c8d'/>}
              </ListItemIcon>
              <ListItemText primary={store} color='#7f8c8d'/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['My List', 'Random Game Suggestion'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} ><GiHamburgerMenu size="large" style={{width: '25px', height: '30px', color: '#2c3e50', marginTop: '20px'}}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
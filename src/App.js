// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemText, ListItemIcon, Collapse, Box } from '@mui/material';
import { ExpandLess, ExpandMore, Home as HomeIcon, Info as InfoIcon, ContactMail as ContactMailIcon, Menu as MenuIcon, StarBorder } from '@mui/icons-material';
import Top from './components/Top';
import Keiyaku from './components/Keiyaku';
import Kenshin from './components/Kenshin';

function App() {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  const toggleSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              Top
            </Typography>
            <Typography variant="h6" component={Link} to="/keiyaku" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              契約管理
            </Typography>
            <Typography variant="h6" component={Link} to="/kenshin" style={{ textDecoration: 'none', color: 'inherit', marginRight: '20px' }}>
              検針値収集
            </Typography>
            <Button color="inherit" onClick={toggleDrawer(true)}><MenuIcon /></Button>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <List>
            <ListItem button component={Link} to="/">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Top" />
            </ListItem>
            <ListItem button onClick={toggleSubMenu}　component={Link} to="/keiyaku">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="契約管理" />
              {openSubMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSubMenu} timeout="auto" unmountOnExit orientation="bottom">
              <List component="div" disablePadding style={{ marginTop: '10px' }}>
                <ListItem button component={Link} to="/sub-page1" style={{ paddingLeft: 20 }}>
                  <ListItemText primary="申込明細（需要者）" />
                </ListItem>
                <ListItem button component={Link} to="/sub-page2" style={{ paddingLeft: 20 }}>
                  <ListItemText primary="申込明細（発電者）" />
                </ListItem>
              </List>
            </Collapse>
            <ListItem button component={Link} to="/kenshin">
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="検針値収集" />
            </ListItem>
          </List>
        </Drawer>
        <Switch>
          <Route path="/" exact component={Top} />
          <Route path="/keiyaku" component={Keiyaku} />
          <Route path="/kenshin" component={Kenshin} />
          <Route path="/sub-page1">
            <div>
              <h2>申込明細（需要者）</h2>
            </div>
          </Route>
          <Route path="/sub-page2">
            <div>
              <h2>申込明細（発電者）</h2>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

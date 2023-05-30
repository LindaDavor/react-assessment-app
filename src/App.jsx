import './App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Link } from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

const drawerWidth = 240;
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Pamital Assessment
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto' }}>
            <Divider />
            <List>
              <ListItem>
                <ListItemButton component={Link} to="/">
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary={'Home'} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={Link} to="/about">
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary={'About'} />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton component={Link} to="/contact">
                  <ListItemIcon>
                  </ListItemIcon>
                  <ListItemText primary={'Contact'} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 8 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;

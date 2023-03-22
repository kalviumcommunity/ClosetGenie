import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['About us', 'Contact us', 'Home'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className="mui-nav">
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            {/* </Menu> */}
          {/* </Box> */} 
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

















// import { Link } from "react-router-dom";
// import MenuIcon from '@mui/icons-material/Menu';
// import LoginButton from "./login";
// import LogoutButton from "./logout";
// import React, { useState,useEffect} from "react";
// // import {useAuth0 } from '@auth0/auth0-react';
// function Homenav(){
//     // let hamburger=React.createRef()
//     // const [isAuthenticated] = useAuth0;
//     const [currWidth,updatewidth]=useState(window.screen.width)
//     useEffect(() => {
//         const handleResize = () => {
//           updatewidth(window.innerWidth);
//         };
//         window.addEventListener('resize', handleResize);
//       }, []);
//     //   if(currWidth<320){
//     //     hamburger.style.display="none"
//     // }
//     const [count,incCount]=useState(0);
    
//    const Hamburger=()=>{
   
//     incCount(count=>count+1);
        
//     }
// return(
//     <div>
//             <div id="space" style={{display: (currWidth<363&&count%2===0?"none":"flex"),flexDirection: (currWidth>363?"row":"column")}} >
//                 <Link className="center2" to="/homeMain">Home</Link>
//                 <Link className="center2" to="about">About us</Link>
//                 <Link className="center2" to="contact">Contact us</Link>

//                 {/* {isAuthenticated ?<LogoutButton/>:<LoginButton/>} */}
//                 <LoginButton></LoginButton>
//                 <div>{currWidth}</div>
//             </div>
//             <div id="hamburger" style={{display:currWidth>363?"none":"flex"}}>
//                 <button onClick={Hamburger}><MenuIcon/></button>

//             </div>
//     </div>
   
// )
// }
// export default Homenav;
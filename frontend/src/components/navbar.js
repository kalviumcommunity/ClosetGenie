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
import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login';
import LogoutButton from './logout';
// import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';

// console.log(isAuthenticated)
const pages = [{title:'Your closet',source:"/"},{title:'About us',source:'/about'},{title:'Contact us',source:'/contact'} ];



function ResponsiveAppBar() {
  // const [size,updateSize]=React.useState("")
  const { isAuthenticated, user } = useAuth0();
  // console.log(user.picture)
  let settings
  let photo
  let imageName
  if(!isAuthenticated){
    settings=[<LoginButton/>];
    photo="/images/user.png" ;
    imageName="Guest"
  }
  else{
    settings = [`${user.name}`,'Dashboard', <LogoutButton/>];
    photo=`${user.picture} `;
    imageName=`${user.name}`
  }
  console.log(isAuthenticated)
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
  const [currWidth,updatewidth]=useState(window.screen.width)
      useEffect(() => {
          const handleResize = () => {
            updatewidth(window.innerWidth);
          };
          window.addEventListener('resize', handleResize);
        }, []);

  return (
    <AppBar position="static" style={{backgroundColor:"black",marginTop:"2%",paddingTop:"2%"
    // ,display:"flex",justifyContent:"center"
    }}>
      <Container style={{marginLeft:"0%",marginRight:"0%",width:"100%"}} 
      maxWidth="xxl"
      >
        <Toolbar disableGutters>
        <Box sx={{ display: { xs: 'none', md: 'flex' },  mr: 1 }} ><img src="https://closetgenie.netlify.app/a2.png" alt="logo" style={{height:100}} /></Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>

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
              sx={{display: { xs: 'block', md: 'none' },color:"black"}}
            >
              
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center"><Link style={{color:"black",textDecoration:"none"}} to={page.source}>{page.title}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} ><img src="https://closetgenie.netlify.app/a2.png" alt="logo" style={{height:50}} /></Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent:"space-around" ,color:"white"}}>
            
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
               <Link style={{color:"white",textDecoration:"none"}} to={page.source}> {page.title}</Link>
              </Button>
            ))}
          </Box>
          
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <Box onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* {!isAuthenticated?<Avatar alt="Remy Sharp" src="/images/user.png" />:<img src={user.picture} alt={user.name} />} */}
                <Avatar alt={imageName} src={photo} />
                
                
              </Box>
            </Tooltip>
            <Menu
              sx={{ mt: '0px' }}
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;




// import logo from "../resources/a1.png";
// import { Link } from "react-router-dom";
// import LoginButton from "./login";
// import LogoutButton from "./logout";
// import { useAuth0 } from "@auth0/auth0-react";
// import './navbar.css'
// function NavBar(){
//     // const Authenticated = useAuth0().isAuthenticated;
//     const {isAuthenticated}=useAuth0
//             return(
//                 <div id="flex">
//                     <img height="95vh" src={logo} alt="logo" />
//                     <Link className="center" to="/homeMain">Home</Link>
//                     {console.log(isAuthenticated)}
//                     {isAuthenticated?<LogoutButton/>:<LoginButton/>}
//                     <Link className="center" to="/">Your Closet</Link>
//                     <Link className="center" to="/about">About us</Link>
//                     <Link className="center" to="/contact">Contact us</Link>
//                 </div>
//  )
//  }
//  export default NavBar;

import React from 'react'
import { Container, Typography, Box, Toolbar, Button, IconButton, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import userimg from '@images/luci';
const pages = ['Board', 'My Boards', 'About', 'Help'];
const settings = ['Account', 'Logout'];

const MainMenu = () => {
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

  const Logo = styled(Typography)`
    font-size: 1.1em;
    text-align: center;
    color: #FAFAFA;
    margin-right: 20px;
  `;

  const UndecoratedLink = styled(Link)`
    text-decoration: none !important;
  `;


  return (
    <AppBar color="secondary" position="static">
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <UndecoratedLink to="/">
            <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <Logo>
                uTodo
              </Logo>
            </Typography>
          </UndecoratedLink>
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
                  <UndecoratedLink to={page.replace(/\s/g, "")}>
                    <Typography textAlign="center" key={page.toString()}>{page}</Typography>
                  </UndecoratedLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <Link to="/">
              uTodo
            </Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <UndecoratedLink to={page.replace(/\s/g, "")}>
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              </UndecoratedLink>

            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <Avatar alt="a" src={userimg} />
            </Tooltip>
            <Menu
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                <UndecoratedLink to={setting}>
                  <Typography textAlign="center" key={setting.toString()}>{setting}</Typography>
                </UndecoratedLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

styled(MainMenu)({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
})

// <Button variant="contained" color="inherit">Login</Button>  or  <Button variant="outlined" color="inherit">Register</Button>

export default MainMenu;

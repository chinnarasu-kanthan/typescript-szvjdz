import { IconButton, MenuItem, Tooltip, Box, Avatar, Menu, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import HeaderTitle from "./title";
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Header(props: any) {
  const handleSidebarToggle = () => {
  };

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);


  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-hold fixed">
          <div className="flex flex-space-between flex-middle h-100">
            <div className="flex">
              <IconButton
                onClick={() => handleSidebarToggle()}
              >
                <MenuIcon style={{ color: "white" }}/>
              </IconButton>
            </div>
            <div className="flex flex-middle">
                <Box sx={{ flexGrow: 0 }} style={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title="Open settings">
                        <>
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Sumith" src="/static/images/avatar/23jpg" />
                        </IconButton>
                        <Typography style={{ marginLeft: '10px' }}>Sumith</Typography>
                        </>
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
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
            </div>
          </div>
        </div>
      </div>
      <HeaderTitle name="Dashboard" />
    </>
  );
}
export default Header;

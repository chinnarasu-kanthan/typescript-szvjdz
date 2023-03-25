import PerfectScrollbar from "react-perfect-scrollbar";
import ailevateLogo from "./../../assets/ailevate-logo-light.svg";
import ailevateLogoSmall from "./../../assets/ailevate-logo-light-small.svg";

import DashboardIcon from '@mui/icons-material/Dashboard';
import QuickreplyIcon from '@mui/icons-material/Quickreply';
import SendIcon from '@mui/icons-material/Send';
import { ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";

const SideNavMenu = (props: any) => {
    return (
        <div className="sidenav">
            <div className="flex-column relative h-full">
                <div className="flex items-center flex-center logo-section">
                    <div className="flex items-center">
                        <img src={ailevateLogo} height={100} alt="ailevate logo"/>
                    </div>
                </div>
                <PerfectScrollbar
                    style={{ maxHeight: "100vh" }}
                    options={{ suppressScrollX: true }}
                    className="scrollable position-relative"
                >
                    {/* <VerticalNav navigation={sideNavItems} /> */}
                        <MenuList>
                            <MenuItem>
                                <ListItemIcon>
                                    <DashboardIcon style={{ color: 'white' }} fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Dashboard</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Forecast</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <QuickreplyIcon style={{ color: 'white' }} fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Quick Overview</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Weather Window</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Squall</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Typhoon</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Lightning</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <SendIcon style={{ color: 'white' }} fontSize="small" />
                                </ListItemIcon>
                                <ListItemText>Submit Ovservation</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Contact Duty Forecaster</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>Latest Forecaster</ListItemText>
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                </ListItemIcon>
                                <ListItemText>  Management</ListItemText>
                            </MenuItem>
                        </MenuList>
                </PerfectScrollbar>
            </div>
        </div>
    );
};
export default SideNavMenu;

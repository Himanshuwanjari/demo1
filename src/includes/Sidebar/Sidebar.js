import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Collapse,
    IconButton,
    ListItemIcon,
    Divider,
} from "@mui/material";
import { Menu, ExpandLess, ExpandMore, Home, Info } from "@mui/icons-material";
import PlaceIcon from '@mui/icons-material/Place';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const [MenuOpen, setMenuOpen] = useState(false);
    const [Menu2Open, setMenu2Open] = useState(false);
    const [DetailsMenu, setDetailsMenu] = useState(false);

    const toggleDrawer = () => setOpen(!open);
    const handleDropdownClick1 = () => setMenuOpen(!MenuOpen);
    const handleDropdownClick2 = () => setMenu2Open(!Menu2Open);
    const handleDropdownClick3 = () => setDetailsMenu(!DetailsMenu);

    return (
        <div style={{ display: "flex", position: 'absolute' }}>
            <IconButton onClick={toggleDrawer} style={{ position: "absolute", top: 4, left: 10 }}>
                <Menu />
            </IconButton>

            <Drawer anchor="left" open={open} onClose={toggleDrawer}
                PaperProps={{
                    sx: {
                        height: '81vh',  // Set the height to 60vh
                        position: 'absolute',  // Position it absolutely
                        width: "15rem",
                        top: '9vh',  // Position it at the top
                    },
                }}>
                <List>
                    <ListItem button component={Link} to="/User" onClick={toggleDrawer}>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText primary="Users" />
                    </ListItem>


                    <ListItem button onClick={handleDropdownClick1}>
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <ListItemText primary="More" />
                        {MenuOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={MenuOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to="/religion" onClick={toggleDrawer}>
                                <ListItemText inset primary="Religion" />
                            </ListItem>
                            <ListItem button component={Link} to="/cast" onClick={toggleDrawer}>
                                <ListItemText inset primary="Cast"></ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to="/subcast" onClick={toggleDrawer}>
                                <ListItemText inset primary="Subcast" />
                            </ListItem>
                        </List>
                    </Collapse>


                    <ListItem button onClick={handleDropdownClick2}>
                        <ListItemIcon>
                            <PlaceIcon />
                        </ListItemIcon>
                        <ListItemText primary="Place" />
                        {Menu2Open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={Menu2Open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to="/country" onClick={toggleDrawer}>
                                <ListItemText inset primary="Country" />
                            </ListItem>
                            <ListItem button component={Link} to="/State" onClick={toggleDrawer}>
                                <ListItemText inset primary="State"></ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to="/city" onClick={toggleDrawer}>
                                <ListItemText inset primary="City" />
                            </ListItem>
                        </List>
                    </Collapse>


                    <ListItem button onClick={handleDropdownClick3}>
                        <ListItemIcon>
                            <Info />
                        </ListItemIcon>
                        <ListItemText primary="Details" />
                        {DetailsMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={DetailsMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button component={Link} to="/education" onClick={toggleDrawer}>
                                <ListItemText inset primary="Education" />
                            </ListItem>
                            <ListItem button component={Link} to="/family" onClick={toggleDrawer}>
                                <ListItemText inset primary="Family"></ListItemText>
                            </ListItem>
                            <ListItem button component={Link} to="/personal" onClick={toggleDrawer}>
                                <ListItemText inset primary="Personal" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
                <Divider />
            </Drawer>

        </div>
    );
};

export default Sidebar;

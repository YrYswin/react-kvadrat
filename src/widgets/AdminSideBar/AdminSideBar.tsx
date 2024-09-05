import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import BusinessIcon from "@mui/icons-material/Business";
// import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AirplayIcon from "@mui/icons-material/Airplay";
import { Box, useTheme, useMediaQuery } from "@mui/material";

import { ExitButton } from "../style/styles";
import TokenService from "../../utils";

const drawerWidth = 240;

interface Props {
  open: boolean;
  handleDrawerToggle: () => void;
}

const AdminSidebar: React.FC<Props> = ({ open, handleDrawerToggle }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation();

  const navigateArray = [
    { path: "/admin", name: "Главная", icon: HomeIcon },
    { path: "/admin/headings", name: "Заголовки", icon: AirplayIcon },
    { path: "/admin/real-estate", name: "Обьекты Недвижимости", icon: BusinessIcon },
    // { path: "/admin/settings", name: "Настройки", icon: SettingsIcon },
  ];

  const logout = () => {
    TokenService.deleteUserLS();
    navigate("/admin/sign-in");
  };

  return (
    <Drawer
      variant={isMobile ? "temporary" : "persistent"}
      open={open}
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          position: "fixed",
          boxSizing: "border-box",
          backgroundColor: "#222224",
          color: "white",
          top: isMobile ? "50px" : "64px",
          height: "calc(100vh - 60px)",
          padding: isMobile ? "10px" : "20px",
          zIndex: 1000,
        },
      }}
    >
      <List sx={{ padding: 0 }}>
        {navigateArray.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={index}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive && location.pathname === item.path ? "red" : "white",
                marginBottom: isMobile ? "10px" : "20px",
              })}
            >
              <ListItem>
                <ListItemIcon sx={{ color: "white", minWidth: isMobile ? "56px" : "40px" }}>
                  <IconComponent fontSize={isMobile ? "small" : "medium"} />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            </NavLink>
          );
        })}
      </List>
      <Box sx={{ flexGrow: 1 }} />

      <ExitButton onClick={logout}>
        <ListItem>
          <ListItemIcon sx={{ color: "white", minWidth: isMobile ? "40px" : "56px" }}>
            <ExitToAppIcon fontSize={isMobile ? "large" : "medium"} />
          </ListItemIcon>
          <ListItemText sx={{ color: "white" }} primary="Выход" />
        </ListItem>
      </ExitButton>
    </Drawer>
  );
};

export default AdminSidebar;

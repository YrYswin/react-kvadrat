import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Box from "@mui/material/Box";
import AdminNavbar from "../AdminNavBar/AdminNavbar";
import AdminSidebar from "../AdminSideBar/AdminSideBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const drawerWidth = 240;

const AdminLayout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <div className="w-full top-0 z-1000 hidden lg:block sticky">
        <Header />
      </div>
      <AdminNavbar handleDrawerToggle={handleDrawerToggle} isOpen={mobileOpen} />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <AdminSidebar open={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginLeft: isMobile ? "0" : mobileOpen ? `${drawerWidth}px` : "0",
            transition: "margin 0.3s",
            overflowY: "auto",
          }}
        >
          <Outlet context={{ mobileOpen }} />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;

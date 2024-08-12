import React, { useEffect, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Modal from "../Header/Modal";

interface Props {
  handleDrawerToggle: () => void;
  isOpen: boolean;
}

const AdminNavbar: React.FC<Props> = ({ handleDrawerToggle, isOpen }) => {
  const [isHeadOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isHeadOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHeadOpen]);

  return (
    <AppBar
      position="static"
      sx={{
        width: isMobile ? "100%" : isOpen ? "calc(100% - 240px)" : "100%",
        transition: "width 0.3s, margin 0.3s",
        backgroundColor: "#9A0A00",
        top: isMobile ? "0px" : "60px",
        marginLeft: isOpen ? "240px" : "0px",
      }}
    >
      <Toolbar>
        {!isMobile && (
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1, display: isMobile ? "none" : "block" }}>
          KVADRAT.KG
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { md: "200px", sm: "200px", xs: "600px" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={handleDrawerToggle}>
            <Avatar alt="Admin" src="/path-to-admin-photo.jpg" sx={{ mr: 2 }} />
            <Box sx={{ paddingRight: 2, color: "white" }}>
              <div>Admin Name</div>
              <div style={{ fontSize: "small" }}>Админ</div>
            </Box>
          </Box>
          {isMobile && (
            <img
              src="/svg/burger.svg"
              alt="menu"
              className="cursor-pointer"
              onClick={() => setIsOpen(!isHeadOpen)}
              style={{ width: "24px", height: "24px" }}
            />
          )}
        </Box>
      </Toolbar>
      {isHeadOpen && (
        <div ref={modalRef}>
          <Modal isOpen={isHeadOpen} setIsOpen={setIsOpen} />
        </div>
      )}
    </AppBar>
  );
};

export default AdminNavbar;

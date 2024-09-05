import { Box, styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

interface Props {
  children: React.ReactNode;
  bgColor?: string;
  borderColor?: string;
}

const ModalUI: React.FC<Props> = ({ children, bgColor, borderColor }) => {
  const theme = useTheme();
  return (
    <ModalStyle>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: bgColor ? bgColor : "black",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: borderColor ? borderColor : "gray",
          boxShadow: 66,
          outline: "none",
          borderRadius: "12px",
          overflow: "hidden",
          [theme.breakpoints.down("md")]: {
            width: "40%",
          },
          [theme.breakpoints.down("sm")]: {
            width: "60%",
          },
          [theme.breakpoints.down("lg")]: {
            width: "80%",
          },
        }}
      >
        {children}
      </Box>
    </ModalStyle>
  );
};

export default ModalUI;

const ModalStyle = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9999,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

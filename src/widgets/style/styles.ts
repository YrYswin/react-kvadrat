import { styled } from "@mui/material";

export const ExitButton = styled("button")({
  borderRadius: "10px",
  zIndex: 1,
  position: "relative",
  width: "150px",
  overflow: "hidden",

  "&::before": {
    position: "absolute",
    top: 0,
    left: 0,
    content: "''",
    height: "100%",
    width: "0",
    backgroundImage: "linear-gradient(to right, #f8a71a 0%, #f48625 33% , #ee423e 66%, #ee1c25 100%)",
    zIndex: -1,
    transition: "all ease .4s",
    borderRadius: "10px",
  },

  "&:hover::before": {
    width: "100%",
  },
});

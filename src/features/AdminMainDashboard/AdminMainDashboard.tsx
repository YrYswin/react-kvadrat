import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useOutletContext } from "react-router-dom";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { GlobalStyles } from "@mui/material";
import MainMetrics from "./ui/MainMetrics";

const globalStyles = (
  <GlobalStyles
    styles={{
      "& .css-k7y545-MuiButtonBase-root-MuiTab-root.Mui-selected": {
        backgroundColor: "#222224",
      },
    }}
  />
);

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel: React.FC<CustomTabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

interface OutletContext {
  mobileOpen: boolean;
}

const AdminMainDashboard: React.FC = () => {
  const { mobileOpen } = useOutletContext<OutletContext>(); // Указываем тип для useOutletContext

  return (
    <div>
      {globalStyles}
      <div
        className={`transition-all duration-300 mx-auto ${mobileOpen ? "w-[90%]" : "w-[92%]"}
        `}
      >
        <MainMetrics />
      </div>
    </div>
  );
};

export default AdminMainDashboard;

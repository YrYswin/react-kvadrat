import React from "react";

import { Box } from "@mui/material";

const NotFoundProduct: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "400px",
      }}
    >
      <img src="/img/NoData.png" alt="no data" className="w-[200px] h-[230px]" />
      <p className="text-2xl text-white">{title}</p>
      <p className="text-white">Попробуйте изменить параметры поиска</p>
    </Box>
  );
};

export default NotFoundProduct;

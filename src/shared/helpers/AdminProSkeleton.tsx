import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const AdminProSkeleton: React.FC = () => {
  return (
    <Stack spacing={1}>
      <div>
        <div className="flex justify-between mr-[30px] md:mr-[70px] xl:mr-[85px]">
          <Skeleton
            sx={{ bgcolor: "grey.700", height: { xs: "40px", md: "60px" }, width: { xs: "100px", md: "380px" } }}
            variant="rounded"
          />
          <Skeleton
            sx={{ bgcolor: "grey.700", height: { xs: "40px", md: "60px" }, width: { xs: "100px", md: "380px" } }}
            variant="rounded"
          />
          <Skeleton
            sx={{ bgcolor: "grey.700", height: { xs: "40px", md: "60px" }, width: { xs: "100px", md: "380px" } }}
            variant="rounded"
          />
          <Skeleton
            sx={{ bgcolor: "grey.700", height: { xs: "40px", md: "60px" }, width: { xs: "60px", md: "100px" } }}
            variant="rounded"
          />
        </div>
      </div>
    </Stack>
  );
};

export default AdminProSkeleton;

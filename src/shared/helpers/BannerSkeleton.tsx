import React from "react";

import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Container from "./Container";

const BannerSkeleton: React.FC = () => {
  return (
    <Container>
      <Stack spacing={1}>
        <div>
          <Skeleton sx={{ bgcolor: "grey.700", margin: "0 auto" }} variant="rounded" height={610} />
        </div>
        <div className="flex">
          <Skeleton
            sx={{ bgcolor: "grey.700", margin: "0 auto" }}
            variant="rounded"
            width={250}
            height={40}
            style={{ borderRadius: "15px" }}
          />
          <Skeleton
            sx={{ bgcolor: "grey.700", margin: "0 auto" }}
            variant="rounded"
            width={250}
            height={40}
            style={{ borderRadius: "15px" }}
          />
        </div>
      </Stack>
    </Container>
  );
};

export default BannerSkeleton;

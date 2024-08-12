import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const StyledSlider = styled(Slider)({
  color: "red",
  height: 8,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 16,
    width: 16,
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&:before": {
      display: "none",
    },
  },
  "& .MuiSlider-rail": {
    color: "grey",
    opacity: 1,
    height: 8,
  },
});

function valuetext(value: number) {
  return `${value}`;
}

type Range = [number, number];

export default function RangeSlider() {
  const [value, setValue] = React.useState<Range>([1500, 3000]);

  const handleChange = (event: Event, newValue: number | number[], activeThumb?: number) => {
    console.log(event, activeThumb);
    if (Array.isArray(newValue)) {
      setValue(newValue as Range);
    }
  };

  return (
    <Box>
      <Typography id="range-slider" gutterBottom>
        Площадь земельного участка
      </Typography>
      <StyledSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={0}
        max={5000}
      />
      <Box sx={{ mt: 2 }}>{`${value[0]} - ${value[1]}`}</Box>
    </Box>
  );
}

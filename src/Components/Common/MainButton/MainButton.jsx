import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../Shared/palette";

const MyButton = styled(Button)({
  color: palette.whiteText,
  backgroundColor: palette.primary,
  padding: "8px 12px",
  borderRadius: "7px",

  "&:hover": {
    backgroundColor: palette.primary,
  },
});

const MainButton = ({ text, onClick, sx, size }) => {
  return (
    <MyButton sx={sx} size={size} disableRipple onClick={onClick}>
      {text}
    </MyButton>
  );
};

export default MainButton;

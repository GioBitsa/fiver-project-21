import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../Shared/palette";

const MyButton = styled(Button)({
  color: palette.whiteText,
  backgroundColor: palette.primary,
  padding: "8px 12px",
  borderRadius: "10px",

  "&:hover": {
    backgroundColor: palette.primary,
  },
});

const MainButton = ({ text, onClick }) => {
  return (
    <MyButton disableRipple onClick={onClick}>
      {text}
    </MyButton>
  );
};

export default MainButton;

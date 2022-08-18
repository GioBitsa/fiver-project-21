import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../Shared/palette";

const MyButton = styled(Button)({
  color: palette.primary,
  backgroundColor: "transparent",
  padding: "8px 12px",
  borderRadius: "7px",
  border: `1px solid ${palette.primary}`,

  "&:hover": {
    backgroundColor: "transparent",
  },
});

const OutlineMainButton = ({ text, onClick }) => {
  return (
    <MyButton disableRipple onClick={onClick}>
      {text}
    </MyButton>
  );
};

export default OutlineMainButton;

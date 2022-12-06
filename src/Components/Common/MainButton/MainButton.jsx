import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../Shared/palette";

const MyButton = styled(Button)(({ disabled }) => ({
  color: disabled ? palette.blackText : palette.whiteText,
  backgroundColor: disabled ? palette.disabled : palette.primary,
  padding: "8px 12px",
  borderRadius: "7px",
  opacity: disabled ? 0.6 : 1,

  "&:hover": {
    backgroundColor: palette.primary,
  },
}));

const MainButton = ({
  text,
  onClick,
  sx,
  size,
  className,
  startIcon,
  endIcon,
  disabled,
}) => {
  return (
    <MyButton
      sx={sx}
      size={size}
      className={className}
      disableRipple
      onClick={onClick}
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={disabled}
    >
      {text}
    </MyButton>
  );
};

export default MainButton;

import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../Shared/palette";

const Content = styled(Box)({
  display: "inline-block",
  borderRadius: "8px",
  backgroundColor: palette.navbarBackground,
  padding: "10px 15px",
  color: palette.lightPrimary,
  marginBottom: "10px",
  fontSize: "14px",
  fontWeight: 600,
});

const Chip = ({ text, sx }) => {
  return <Content sx={sx}>{text}</Content>;
};

export default Chip;

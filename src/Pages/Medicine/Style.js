import { styled } from "@mui/system";
import { Box, Grid, Typography } from "@mui/material";
import palette from "../../Shared/palette";

export const MyImageBox = styled(Box)({
  backgroundColor: palette.whiteText,
  borderRadius: "100%",
  width: "80px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    width: "40px",
    height: "40px",
    objectFit: "contain",
  },
});

export const GridTitle = styled(Typography)({
  color: palette.primary,
  fontSize: "20px",
  fontWeight: "bold",
  margin: "20px 0 10px 0",
  textAlign: "center",
  minHeight: "60px",

  "@media screen and (max-width: 600px)": {
    fontSize: "18px",
  },
});

export const MyGridItem = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "500px !important",
});

export const RightButton = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: palette.lightPurple,
  borderRadius: "10px",
  minWidth: "50px",
  minHeight: "50px",
  height: "50px",
  cursor: "pointer",

  "@media screen and (max-width: 600px)": {
    minWidth: "40px",
    height: "40px",
    minHeight: "40px",
  },
});

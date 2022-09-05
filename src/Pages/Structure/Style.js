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

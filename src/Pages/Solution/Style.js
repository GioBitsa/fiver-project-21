import { styled } from "@mui/system";
import { Box, Grid, Typography, Stack } from "@mui/material";
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

export const SocialButton = styled(Stack)({
  border: "1px solid black",
  borderRadius: "10px",
  padding: "7px 15px",
  alignItems: "center",
  lineHeight: "20px",
  minWidth: "200px",
  justifyContent: "center",
  cursor: "pointer",

  "& span": {
    fontSize: "12px",
    color: palette.black,
  },

  "& p": {
    fontSize: "18px",
    color: palette.black,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  "& img": {
    width: "30px",
    height: "30px",
    objectFit: "contain",
    marginRight: "5px",
  },

  "@media screen and (max-width: 900px)": {
    minWidth: "180px",

    "& span": {
      fontSize: "12px",
    },

    "& p": {
      fontSize: "16px",
    },
  },

  "@media screen and (max-width: 600px)": {
    minWidth: "150px",

    "& p": {
      fontSize: "14px",
    },

    "& img": {
      width: "20px",
      height: "20px",
    },
  },
});

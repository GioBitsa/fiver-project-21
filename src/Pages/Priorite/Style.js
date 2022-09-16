import { styled } from "@mui/system";
import { Box, Grid, Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const MyGridItem = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "500px !important",
});

export const NestedGrid = styled(Grid)({
  paddingTop: "24px !important",
  paddingBottom: "12px",
  position: "relative",

  "&::after": {
    content: '""',
    position: "absolute",
    top: "100%",
    left: "48px",
    width: "calc(100% - 96px)",
    height: "1px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  "@media screen and (max-width: 900px)": {
    paddingLeft: "0 !important",
    marginLeft: "0 !important",

    "&::after": {
      left: 0,
      width: "100%",
    },
  },
});

export const LeftGrid = styled(Grid)({
  padding: "24px !important",
  color: palette.primary,
  fontWeight: "bold",
  fontSize: "20px",
  display: "flex",
  alignItems: "center",
  alignSelf: "flex-start",

  "& img": {
    marginRight: "10px",
  },

  "@media screen and (max-width: 900px)": {
    paddingLeft: "0 !important",
  },

  "@media screen and (max-width: 600px)": {
    fontSize: "16px",
  },
});

export const RightGrid = styled(Grid)({
  padding: "24px !important",
  position: "relative",
  color: palette.black,

  "&::before": {
    content: '""',
    position: "absolute",
    top: "15%",
    left: 0,
    width: "1px",
    height: "70%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  "@media screen and (max-width: 600px)": {
    paddingRight: "0 !important",
    fontSize: "15px",
  },
});

export const MyItem = styled(Box)({
  backgroundColor: palette.navbarBackground,
  padding: "40px 20px",
  borderRadius: "5px",
  display: "flex",

  "& h4": {
    flex: 1,
    fontSize: "20px",
    color: palette.primary,
    fontWeight: "bold",
    minWidth: "150px",
  },

  "& p": {
    flex: 4,
    color: palette.blackText,
    opacity: 0.5,
    paddingLeft: "20px",
    marginLeft: "20px",
    borderLeft: "1px solid rgba(0, 0, 0, 0.5)",
  },

  "@media screen and (max-width: 768px)": {
    flexDirection: "column",

    "& p": {
      border: "none",
      marginLeft: 0,
      paddingLeft: 0,
      borderTop: "1px solid rgba(0, 0, 0, 0.5)",
      paddingTop: "20px",
      marginTop: "20px",
    },
  },
});

export const SocialButton = styled(Stack)({
  border: "1px solid rgba(0, 0, 0, 0.7)",
  borderRadius: "10px",
  padding: "7px 15px",
  alignItems: "center",
  lineHeight: "20px",
  minWidth: "190px",
  justifyContent: "center",
  cursor: "pointer",

  "& span": {
    fontSize: "12px",
    color: palette.black,
  },

  "& p": {
    fontSize: "16px",
    color: palette.black,
    textTransform: "uppercase",
    fontWeight: "600",
  },

  "& img": {
    width: "30px",
    height: "30px",
    objectFit: "contain",
    marginRight: "5px",
  },

  "@media screen and (max-width: 900px)": {
    border: "1px solid white",
    minWidth: "180px",

    "& span": {
      color: palette.whiteText,
    },

    "& p": {
      color: palette.whiteText,
    },
  },

  "@media screen and (max-width: 600px)": {
    border: "1px solid white",
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

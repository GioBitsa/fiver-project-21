import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const MyItem = styled(Stack)({
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  backgroundColor: palette.navbarBackground,
  borderRadius: "10px",
  transition: "all 0.3s ease",
  height: "250px",
  position: "relative",

  "& button": {
    width: "100%",
  },

  "&:hover": {
    backgroundColor: palette.primary,
    transform: "scale(1.05)",
    zIndex: 1,

    "& span, h6, p": {
      color: palette.whiteText,
    },

    "& button": {
      color: palette.primary,
      backgroundColor: palette.whiteText,
    },
  },

  "@media screen and (max-width: 900px)": {
    maxWidth: "400px",
    height: "auto",
    margin: "0 auto 20px",

    "& button": {
      marginTop: "50px",
    },
  },
});

export const MyStack = styled(Stack)({
  width: "100%",
  flexDirection: "row",
  justifyContent: "flex-start",
  height: "100%",

  "& span": {
    color: palette.primary,
    fontSize: "50px",
    fontWeight: "bold",
    paddingRight: "15px",
    marginRight: "15px",
    position: "relative",
    height: "fit-content",
  },

  "& span::after": {
    content: '""',
    position: "absolute",
    top: "15%",
    left: "100%",
    width: "1px",
    height: "70%",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },

  "& h6": {
    color: palette.blackText,
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px",
  },

  "& p": {
    color: palette.grey,
    fontSize: "18px",
  },

  "@media screen and (max-width: 900px)": {
    "& span": {
      fontSize: "40px",
    },
    "& h6": {
      fontSize: "21px",
    },
    "& p": {
      fontSize: "16px",
    },
  },
});

import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../../Shared/palette";
import { MainButton } from "../../../Components/Common";

export const MainBox = styled(Stack)({
  position: "relative",
  width: "100%",
  height: "100vh",

  "@media screen and (max-width: 899px)": {
    height: "auto",
    flexDirection: "column-reverse",
  },

  "@media screen and (max-height: 700px)": {
    height: "auto",
  },
});

export const Content = styled(Box)({
  width: "50%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  background: palette.linearHorizontaly,

  "@media screen and (max-width: 899px)": {
    position: "initial",
    background: palette.whiteText,
    width: "100%",
    padding: "40px 0",
  },
});

export const MainImageContainer = styled(Box)({
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden",

  "& img.main": {
    display: "block",
    width: "80%",
    height: "100%",
    objectFit: "contain",
    margin: "0 0 0 auto",
  },

  "& img.first": {
    width: "70%",
  },

  "& img.second": {
    width: "50%",
  },

  "& img.ellipse": {
    position: "absolute",
    left: 0,
    bottom: 0,
    transform: "rotate(180deg)",
  },

  "& img.dots": {
    position: "absolute",
    right: 0,
    bottom: 0,
  },

  "@media screen and (max-width: 899px)": {
    height: "500px",
    background: palette.linearHorizontaly,
    borderRadius: "0 0 30px 30px",

    "& img": {
      width: "70px",
      height: "70px",
    },

    "& img.main": {
      width: "100%",
    },

    "& img.first": {
      width: "100%",
      objectFit: "cover",
    },

    "& img.second": {
      width: "70%",
    },
  },
});

export const MyStack = styled(Stack)({
  height: "100%",
  color: palette.whiteText,

  "& h3": {
    fontSize: "34px",
    fontWeight: 600,
  },

  "& p": {
    fontSize: "18px",
    fontWeight: 600,
  },

  "& h6": {
    fontSize: "21px",
    textAlign: "center",
  },

  "@media screen and (max-width: 899px)": {
    color: palette.blackText,

    "& h3": {
      color: palette.primary,
      fontSize: "24px",
    },

    "& p": {
      opacity: 0.8,
      fontSize: "16px",
    },

    "& h6": {
      fontSize: "18px",
    },
  },
});

export const MyMainButton = styled(MainButton)({
  paddingTop: "15px",
  paddingBottom: "15px",
  backgroundColor: palette.whiteText,
  color: palette.primary,
  fontWeight: "bold",
  textTransform: "capitalize",
  marginTop: "50px",

  "&:hover": {
    backgroundColor: palette.white,
    color: palette.lightPrimary,
  },

  "@media screen and (max-width: 899px)": {
    backgroundColor: palette.primary,
    color: palette.whiteText,

    "&:hover": {
      backgroundColor: palette.lightPrimary,
      color: palette.white,
    },
  },
});

export const CircleImage = styled("img")({
  position: "absolute",
  top: 0,
  right: 0,

  "@media screen and (max-width: 899px)": {
    width: "70px",
    height: "70px",
  },
});

export const MyChooseButton = styled(MainButton)({
  color: palette.whiteText,
  flex: 1,
  backgroundColor: "transparent",
  border: `1px solid ${palette.whiteText}`,
  paddingTop: "15px",
  paddingBottom: "15px",
  width: "100%",

  "&.active": {
    backgroundColor: palette.whiteText,
    color: palette.primary,
  },

  "@media screen and (max-width: 899px)": {
    border: `1px solid ${palette.primary}`,
    color: palette.primary,
    paddingTop: "10px",
    paddingBottom: "10px",

    "&.active": {
      backgroundColor: palette.primary,
      color: palette.whiteText,
    },
  },
});

export const CardImageContainer = styled(Box)({
  width: "100%",

  "& img": {
    display: "block",
    width: "100px",
    height: "100px",
    objectFit: "contain",
    margin: "0 auto",
  },

  "& img:last-of-type": {
    display: "none",
  },

  "@media screen and (max-width: 899px)": {
    "& img:first-of-type": {
      display: "none",
    },

    "& img:last-of-type": {
      display: "block",
    },
  },

  "@media screen and (max-width: 599px)": {
    "& img": {
      width: "70px",
      height: "70px",
    },
  },
});

export const Header = styled(Stack)({
  position: "absolute",
  top: "50px",
  left: 0,
  width: "100%",
  padding: "0 24px",
  zIndex: 10,

  "& img": {
    width: "100%",
    maxWidth: "300px",
  },

  "@media screen and (max-width: 899px)": {
    top: "20px",
  },

  "@media screen and (max-width: 599px)": {
    padding: "0 16px",

    "& img": {
      maxWidth: "200px",
    },
  },
});

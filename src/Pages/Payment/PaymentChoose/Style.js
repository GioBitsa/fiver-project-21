import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import { MainButton } from "../../../Components/Common";
import palette from "../../../Shared/palette";

export const MainBox = styled(Stack)({
  position: "relative",
  width: "100%",
  height: "100vh",

  "@media screen and (max-width: 899px)": {
    height: "auto",
    flexDirection: "column-reverse",
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
    objectFit: "cover",
    margin: "0 0 0 auto",
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

export const CircleImage = styled("img")({
  position: "absolute",
  top: 0,
  right: 0,

  "@media screen and (max-width: 899px)": {
    width: "70px",
    height: "70px",
  },
});

export const MyStack = styled(Stack)({
  height: "100%",
  color: palette.whiteText,

  "& h3": {
    fontSize: "24px",
    fontWeight: 600,
  },

  "& p": {
    fontSize: "18px",
  },

  "& p span": {
    fontWeight: "bold",
  },

  "@media screen and (max-width: 899px)": {
    color: palette.blackText,

    "& h3": {
      color: palette.primary,
    },

    "& p": {
      fontSize: "16px",
      opacity: 0.8,
    },

    "& p span": {
      opacity: 1,
    },
  },
});

export const MyChooseButton = styled(Box)({
  padding: "15px 12px",
  borderRadius: "7px",
  backgroundColor: "transparent",
  color: palette.whiteText,
  fontWeight: "bold",
  textTransform: "capitalize",
  cursor: "pointer",
  border: `1px solid ${palette.whiteText}`,

  "& h6": {
    fontSize: "16px",
    fontWeight: "bold",
    textAlign: "center",
  },

  "& img": {
    display: "none",
    width: "50px",
    height: "50px",
    objectFit: "contain",
    margin: "0 auto 10px auto",
  },

  "& img:first-of-type": {
    display: "block",
  },

  "&.active": {
    backgroundColor: palette.whiteText,
    color: palette.primary,
    borderColor: palette.whiteText,
  },

  "&.active img:first-of-type": {
    display: "none",
  },

  "&.active img:last-of-type": {
    display: "block",
  },

  "@media screen and (max-width: 899px)": {
    borderColor: palette.primary,
    color: palette.primary,
    padding: "12px",

    "& img": {
      width: "30px",
      height: "30px",
    },

    "& img:first-of-type": {
      display: "none",
    },

    "& img:last-of-type": {
      display: "block",
    },

    "&.active": {
      backgroundColor: palette.primary,
      color: palette.whiteText,
    },

    "&.active img:first-of-type": {
      display: "block",
    },

    "&.active img:last-of-type": {
      display: "none",
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

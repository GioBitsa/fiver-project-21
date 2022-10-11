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

  "& img.main.small": {
    display: "none",
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
      display: "none",
    },

    "& img.main.small": {
      display: "block",
      width: "100%",
      objectFit: "contain",
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
  padding: "12px",
  borderRadius: "7px",
  backgroundColor: "transparent",
  color: "rgba(255, 255, 255, 0.6)",
  fontWeight: "600",
  cursor: "pointer",
  border: "1px solid rgba(255, 255, 255, 0.6)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  "& h6": {
    fontSize: "18px",
    textTransform: "uppercase",
  },

  "& p": {
    fontSize: "16px",
  },

  "& > div": {
    flexGrow: 1,
    padding: "0 20px",
  },

  "& img": {
    display: "block",
    width: "50px",
    height: "50px",
    objectFit: "contain",
    margin: "0 auto",
  },

  "& span": {
    width: "44px",
    height: "44px",
    minWidth: "44px",
    minHeight: "44px",
    borderRadius: "100%",
    border: `2px solid ${palette.whiteText}`,
    backgroundColor: palette.primary,
    opacity: 0.6,
    position: "relative",
  },

  "& span::after": {
    content: '""',
    position: "absolute",
    top: "7.5%",
    left: "7.5%",
    width: "85%",
    height: "85%",
    borderRadius: "100%",
    backgroundColor: palette.whiteText,
  },

  "&.active": {
    backgroundColor: palette.whiteText,
    color: palette.primary,
    borderColor: palette.whiteText,
  },

  "&.active h6": {
    color: palette.primary,
  },

  "&.active p": {
    color: palette.blackText,
    opacity: 0.6,
  },

  "&.active span": {
    borderColor: palette.primary,
    backgroundColor: palette.whiteText,
    opacity: 1,
  },

  "&.active span::after": {
    background: palette.linearHorizontaly,
  },

  "@media screen and (max-width: 899px)": {
    borderColor: "rgba(34, 34, 34, 0.4)",
    color: "rgba(34, 34, 34, 0.4)",
    padding: "10px 12px",

    "& span": {
      borderColor: "rgba(34, 34, 34, 0.4)",
      backgroundColor: palette.whiteText,
    },

    "& span::after": {
      backgroundColor: "rgba(34, 34, 34, 0.4)",
    },

    "&.active": {
      backgroundColor: palette.primary,
      color: palette.whiteText,
      borderColor: palette.primary,
    },

    "&.active h6": {
      color: palette.whiteText,
    },

    "&.active p": {
      color: palette.whiteText,
      opacity: 0.8,
    },

    "&.active span": {
      borderColor: palette.whiteText,
      backgroundColor: palette.primary,
    },

    "&.active span::after": {
      background: palette.whiteText,
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

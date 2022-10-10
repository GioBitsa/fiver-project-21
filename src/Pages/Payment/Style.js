import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../Shared/palette";
import { MainButton } from "../../Components/Common";

export const MainBox = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100vh",

  "@media screen and (max-width: 899px)": {
    height: "auto",
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

export const LeftPart = styled(Stack)({
  flex: 1,
  height: "100%",
  background: palette.linearHorizontaly,

  "@media screen and (max-width: 899px)": {
    width: "100%",
    background: palette.whiteText,
  },
});

export const PaymentImageContainer = styled(Box)({
  flex: 1,
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",

  "& img": {
    display: "none",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    margin: "0 auto",
  },

  "@media screen and (max-width: 899px)": {
    background: palette.linearHorizontaly,
    width: "100%",
    borderRadius: "0 0 30px 30px",
    maxHeight: "550px",
    minHeight: "450px",

    "& img": {
      display: "block",
      minWidth: "450px",
    },
  },
});

export const MainContent = styled(Stack)({
  color: palette.whiteText,

  "& h3": {
    fontSize: "34px",
    fontWeight: 600,
    marginBottom: "30px",
  },

  "& p": {
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px",
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
  margin: "0 auto 10px auto",
  width: "100px",
  height: "100px",

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
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
});

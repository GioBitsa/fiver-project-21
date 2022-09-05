import { styled } from "@mui/system";
import { Box, Container, IconButton } from "@mui/material";
import palette from "../../Shared/palette";

export const MainBox = styled(Box)({
  background: palette.linearHorizontaly,
  minHeight: "100vh",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  padding: "40px 0",

  "& .top-ellipse, .bottom-ellipse, .dots": {
    position: "absolute",
  },

  "& .top-ellipse": {
    top: 0,
    left: 0,
    transform: "scaleY(-1)",
  },

  "& .bottom-ellipse": {
    bottom: 0,
    right: 0,
    transform: "scaleY(-1)",
  },

  "& .dots": {
    top: 0,
    right: 0,
  },
});

export const MyContainer = styled(Container)({
  backgroundColor: palette.whiteText,
  borderRadius: "10px",
  padding: "40px",
  position: "relative",
  zIndex: 1,

  "@media screen and (max-width: 600px)": {
    padding: "40px 20px",
  },
});

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    marginRight: "10px",
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },

  "& h2": {
    fontSize: "34px",
    color: palette.primary,
    fontWeight: "600",
  },

  "@media screen and (max-width: 600px)": {
    "& h2": {
      fontSize: "28px",
    },
  },
});

export const MyIconButton = styled(IconButton)({
  position: "absolute",
  right: 0,
  bottom: 0,
  backgroundColor: palette.lightGrey,
  border: `2px solid ${palette.whiteText}`,
});

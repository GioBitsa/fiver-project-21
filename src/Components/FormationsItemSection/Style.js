import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../Shared/palette";

export const SpanContainer = styled(Box)({
  position: "relative",
  width: "60px",
  height: "60px",

  "& span": {
    width: "100%",
    height: "100%",
    backgroundColor: palette.lightPrimary,
    color: palette.whiteText,
    fontSize: "28px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "5px",
    position: "relative",
    zIndex: 1,
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: "5px",
    left: "5px",
    width: "100%",
    height: "100%",
    backgroundColor: palette.primary,
    borderRadius: "5px",
  },

  "@media screen and (max-width: 900px)": {
    width: "40px",
    height: "40px",

    "& span": {
      fontSize: "20px",
    },
  },
});

export const MyImageContainer = styled(Box)({
  flex: 1,

  "& img": {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "contain",
    maxWidth: "400px",
    margin: "0 auto",
  },

  "@media screen and (max-width: 900px)": {
    transform: "scaleX(-1)",
  },
});

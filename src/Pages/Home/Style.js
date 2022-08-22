import { styled } from "@mui/system";
import { Typography } from "@mui/material";
import palette from "../../Shared/palette";

export const HeroHeading = styled(Typography)({
  fontSize: "48px",
  fontWeight: 600,
  marginBottom: "20px",
  lineHeight: "70px",

  "& span": {
    background: palette.linear,
    "Webkit-background-clip": "text",
    "Webkit-text-fill-color": "transparent",
  },

  "& strong": {
    fontWeight: 600,
    color: palette.primary,
  },

  "@media screen and (max-width: 600px)": {
    fontSize: "32px",
    lineHeight: "60px",
  },
});

export const HeroParagraph = styled(Typography)({
  color: palette.grey,
  fontSize: "18px",
  maxWidth: "600px",

  "@media screen and (max-width: 600px)": {
    fontSize: "14px",
  },
});

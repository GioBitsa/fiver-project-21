import { styled } from "@mui/system";
import { Grid } from "@mui/material";
import palette from "../../Shared/palette";

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
    backgroundColor: "black",
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
    backgroundColor: "black",
  },

  "@media screen and (max-width: 600px)": {
    paddingRight: "0 !important",
    fontSize: "15px",
  },
});

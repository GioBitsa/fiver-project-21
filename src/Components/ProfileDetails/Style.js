import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const ProfileDetailsContainer = styled(Stack)({
  padding: "30px",
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
  height: "100%",

  "& > div > img": {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
  },

  "& img.badge": {
    width: "30px",
    height: "30px",
    objectFit: "contain",
  },

  "& p": {
    fontSize: "14px",
    color: palette.blackText,
  },

  "& p span": {
    opacity: 0.6,
  },

  "@media screen and (max-width: 900px)": {
    backgroundColor: "initial",
    boxShadow: "none",

    "& p": {
      opacity: 0.6,
    },
  },
});

export const MedicineDetails = styled(Stack)({
  padding: "30px",
  background: palette.linearHorizontalyFliped,
  borderRadius: "5px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
  flex: 1,
  maxWidth: "400px",
  minWidth: "350px",

  "& p": {
    fontSize: "14px",
    color: palette.whiteText,
  },

  "& p span": {
    opacity: 0.6,
  },

  "@media screen and (max-width: 900px)": {
    background: "initial",
    boxShadow: "none",
    minWidth: "initial",
    margin: "0 !important",

    "& p": {
      color: palette.blackText,
      opacity: 0.6,
    },
  },
});

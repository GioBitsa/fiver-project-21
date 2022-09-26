import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const ProfileDetailsContainer = styled(Stack)({
  padding: "30px",
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
  height: "100%",

  "& > div": {
    flex: 1,
    maxWidth: "350px",
  },

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
    padding: "0",
    backgroundColor: "transparent",
    boxShadow: "none",

    "& > div": {
      border: "1px solid rgba(34, 34, 34, 0.2)",
      borderRadius: "5px",
      padding: "30px",
      maxWidth: "initial",
    },

    "& > div:first-child": {
      border: "none",
      borderRadius: "5px",
      backgroundColor: palette.navbarBackground,
      padding: "30px",
    },
  },

  "@media screen and (max-width: 450px)": {
    "& > div": {
      padding: "30px 20px",
    },
  },
});

export const Item = styled(Stack)({
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",

  "& img": {
    display: "block",
    margin: "0 auto",
    width: "30px",
    height: "30px",
    objectFit: "contain",
  },

  "& p": {
    fontSize: "10px",
    color: palette.blackText,
    fontWeight: "500",
    margin: "5px 0",
    whiteSpace: "nowrap",
  },

  "& span": {
    fontSize: "10px",
    color: palette.blackText,
    fontWeight: "bold",
  },
});

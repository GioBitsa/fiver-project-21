import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../../Shared/palette";

export const Item = styled(Box)({
  padding: "30px",
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
  marginBottom: "24px",

  "& h3": {
    color: palette.primary,
    fontSize: "20px",
    fontWeight: 500,
  },

  "@media screen and (max-width: 900px)": {
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "1px solid rgba(34, 34, 34, 0.2)",
  },

  "@media screen and (max-width: 450px)": {
    padding: "30px 20px",
  },
});

export const ProfileDetailsContainer = styled(Item)({
  "& img": {
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

  "& h4": {
    color: palette.primary,
    fontSize: "18px",
    fontWeight: 500,
    my: 1,
  },

  "& h5": {
    textAlign: "center",
    color: palette.blackText,
    fontSize: "14px",
    fontWeight: 400,
    opacity: 0.8,
  },
});

export const StackItem = styled(Stack)({
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 10px 0",

  "& img": {
    display: "block",
    margin: "0 auto",
    width: "25px",
    height: "25px",
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

import { styled } from "@mui/system";
import { IconButton, Box } from "@mui/material";
import palette from "../../../Shared/palette";

export const PlusIconButton = styled(IconButton)({
  backgroundColor: palette.primary,
  color: palette.whiteText,
});

export const Item = styled(Box)({
  padding: "30px",
  height: "100%",
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
  marginBottom: "24px",

  "& h3": {
    color: palette.blackText,
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

export const Admission = styled(Item)({
  backgroundColor: palette.navbarBackground,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  "& img": {
    width: "25px",
    height: "25px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 20px",
  },

  "& .flexContainer": {
    marginTop: "40px",
    width: "100%",
  },

  "& .flexContainer > div": {
    flex: 1,
    fontSize: "12px",
    fontWeight: 500,
    textAlign: "center",
    cursor: "pointer",
    padding: "10px",
    backgroundColor: "#E3E3E3",
    color: "rgba(34, 34, 34, 0.4)",
  },

  "& .flexContainer > div:first-of-type": {
    backgroundColor: palette.primary,
    color: palette.whiteText,
  },
});

export const Medicines = styled(Item)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",

  "& h3": {
    color: palette.primary,
    marginBottom: "16px",
    textDecoration: "underline",
  },

  "& h4": {
    color: palette.blackText,
    fontSize: "13px",
    fontWeight: 300,
    margin: "10px 0",
  },

  "& h6": {
    color: palette.blackText,
    fontSize: "18px",
    fontWeight: "600",
  },

  "& img": {
    width: "30px",
    height: "30px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
  },

  "& > div": {
    width: "100%",
    marginTop: "20px",
  },

  "& > div > div": {
    flex: 1,
  },
});

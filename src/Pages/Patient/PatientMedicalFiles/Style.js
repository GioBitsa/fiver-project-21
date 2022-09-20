import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../../Shared/palette";

export const MyItem = styled(Box)({
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
  padding: "20px",
  backgroundColor: palette.whiteText,

  "@media screen and (max-width: 900px)": {
    padding: "20px 0",
  },
});

export const MyInputContainer = styled(Box)({
  position: "relative",
  width: "100%",
  height: "50px",
});

export const SearchButton = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "50px",
  height: "50px",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  "& svg": {
    color: palette.blackText,
    opacity: 0.6,
    width: "20px",
    height: "20px",
  },
});

export const MyInput = styled("input")({
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
  left: 0,
  border: "none",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  padding: "15px 80px 15px 50px",
  borderRadius: "5px",
  color: palette.blackText,
  opacity: 0.6,
  fontSize: "14px",

  "&:focus": {
    outline: "none",
  },
});

export const MySelectContainer = styled(Box)({
  position: "absolute",
  right: 0,
  top: 0,
  width: "80px",
  height: "50px",

  "& > div": {
    width: "100%",
    height: "100%",
    fontSize: "12px",
    color: palette.blackText,
    opacity: 0.6,
  },

  "& .MuiSelect-select": {
    padding: "15px 32px 15px 15px",
  },

  "& fieldset": {
    border: "none",
  },

  "&::after": {
    content: '""',
    position: "absolute",
    top: "10%",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    width: "2px",
    height: "80%",
  },
});

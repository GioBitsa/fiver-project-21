import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../Shared/palette";

export const MyInputContainer = styled(Box)({
  margin: "30px 0",
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

export const FilterButton = styled(Box)({
  position: "absolute",
  top: 0,
  right: 0,
  width: "70px",
  height: "50px",
  zIndex: 2,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  background: palette.linearVerticaly,
  borderRadius: "0 5px 5px 0",

  "& svg": {
    color: palette.whiteText,
    width: "30px",
    height: "30px",
  },
});

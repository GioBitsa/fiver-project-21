import { List, Stack } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../Shared/palette";

export const NewsLetter = styled(Stack)({
  position: "absolute",
  top: "-150px",
  left: "50%",
  width: "100%",
  transform: "translate(-50%)",
  overflow: "hidden",
  padding: "70px 50px",
  backgroundColor: palette.whiteText,

  "& .ellipse": {
    width: "100px",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  "& .left-dots": {
    width: "120px",
    position: "absolute",
    top: 0,
    left: 0,
  },
  "& .right-dots": {
    width: "120px",
    position: "absolute",
    top: 0,
    right: 0,
  },
});

export const MyForm = styled("form")({
  width: "400px",
  marginRight: "auto",
  position: "relative",
});

export const MyInput = styled("input")({
  backgroundColor: palette.primary,
  padding: "15px 15px",
  color: palette.whiteText,
  width: "100%",
  border: "none",
  borderRadius: "10px",
  paddingRight: "110px",

  "&:focus": {
    outline: "none",
  },
});

export const MyButton = styled("button")({
  position: "absolute",
  right: 0,
  margin: "8px",
  color: palette.primary,
  backgroundColor: palette.whiteText,
  height: "calc(100% - 16px)",
  padding: "8px 12px",
  border: "none",
  cursor: "pointer",
  fontWeight: "600",
  borderRadius: "7px",
});

export const MyList = styled(List)({
  display: "flex",
  flexDirection: "column",

  "& .MuiListItemIcon-root": {
    minWidth: "30px",
  },
  "& .MuiListItemIcon-root svg": {
    fontSize: "20px",
    color: palette.whiteText,
    fontWeight: "bold",
  },
  "& .MuiListItemButton-root": {
    display: "inline-flex",
    width: "fit-content",
    paddingLeft: 0,
  },
  "& .MuiListItemButton-root:hover": {
    backgroundColor: "transparent",
  },
});

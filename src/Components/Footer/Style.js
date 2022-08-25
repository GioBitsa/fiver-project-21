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

  "@media screen and (max-width: 899px)": {
    flexDirection: "column",
    position: "relative",
    top: "-5px",
    left: "0",
    transform: "translate(0)",

    "&>div": {
      width: "100%",
    },

    "&>div:first-of-type": {
      width: "100%",
      textAlign: "center",
      marginBottom: "20px",
    },

    "&>div:first-of-type p": {
      maxWidth: "100%",
    },

    "&>div:last-of-type": {
      margin: 0,
      padding: 0,
      textAlign: "center",
    },

    "&>div:last-of-type form": {
      width: "100%",
    },
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

  "@media screen and (max-width: 900px)": {
    textAlign: "center",
    marginTop: "0 !important",

    "& .MuiListItemButton-root": {
      display: "inline-flex",
      width: "fit-content",
      margin: "0 auto",
      paddingLeft: "16px",
      textAlign: "center",
    },
  },
});

export const MyListSecondary = styled(List)({
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
    margin: "10px auto",
    textAlign: "center",
  },
  "& .MuiListItemText-root": {
    borderBottom: `1px solid ${palette.whiteText}`,
  },
  "& .MuiListItemButton-root:hover": {
    backgroundColor: "transparent",
  },
});

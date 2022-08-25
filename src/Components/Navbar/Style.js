import { Box, Button, Menu, Stack } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../Shared/palette";

export const MyButton = styled(Button)({
  color: palette.blackText,
  fontWeight: 500,

  "&:hover": {
    backgroundColor: "transparent",
  },
});

export const MyMenu = styled(Menu)({
  "& .MuiButtonBase-root": {
    color: palette.blackText,
    opacity: "0.4",
  },

  "& .MuiButtonBase-root:hover": {
    backgroundColor: "transparent",
    color: palette.primary,
    opacity: 1,
  },
});

export const NavbarLinksContainer = styled(Stack)({
  "&.active": {
    opacity: 1,
    zIndex: 1,
  },

  "@media screen and (max-width: 1100px)": {
    position: "absolute",
    top: "100%",
    right: 0,
    flexDirection: "column",
    zIndex: "-1",
    backgroundColor: "white",
    padding: "14px 16px",
    borderRadius: "12px",
    transition:
      "opacity 297ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 198ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
    boxShadow:
      "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
    opacity: 0,

    "&>div": {
      flexDirection: "column",
    },
  },
});

export const BarContainer = styled(Box)({
  display: "none",
  alignItems: "center",
  justifyContent: "center",

  "& svg": {
    fontSize: "40px",
    color: palette.blackText,
  },

  "@media screen and (max-width: 1100px)": {
    display: "flex",
  },
});

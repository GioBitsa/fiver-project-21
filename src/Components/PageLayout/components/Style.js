import { styled } from "@mui/system";
import { Button, Toolbar } from "@mui/material";
import palette from "../../../Shared/palette";

export const SideBarHeader = styled(Toolbar)({
  fontSize: "20px",
  color: palette.primary,
  fontWeight: "600",
  justifyContent: "center",
  backgroundColor: palette.whiteText,
  boxShadow: "0 9px 25px rgba(0, 0, 0, 0.1)",

  "& img": {
    marginRight: "5px",
    width: "40px",
    height: "40px",
    objectFit: "contain",
  },
});

export const SideBarProfile = styled(Toolbar)({
  width: "100%",
  margin: "10px 0 0",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",

  "& img": {
    width: "35px",
    height: "35px",
    objectFit: "contain",
    marginRight: "10px",
  },

  "& > div": {
    flexGrow: 1,
  },

  "& span": {
    fontSize: "14px",
  },

  "& h6": {
    fontSize: "14px",
    color: palette.primary,
    fontWeight: 500,
  },

  "& svg": {
    fontSize: "20px",
    color: palette.blackText,
  },
});

export const MyListItemButton = styled(Button)({
  width: "100%",
  justifyContent: "flex-start",
  padding: "10px 8px 10px 24px",
  margin: "10px 0",

  "& img": {
    width: "20px",
    height: "20px",
    objectFit: "contain",
    marginRight: "10px",
  },

  "& span": {
    textAlign: "left",
    color: palette.veryLightPrimary,
    fontWeight: "600",
    fontSize: "14px",
    flexGrow: 1,
  },

  "& span.disabled": {
    color: palette.blackText,
    fontWeight: 500,
    opacity: 0.4,
  },

  "&:hover": {
    backgroundColor: palette.sideBarButtonBackground,
  },

  "&.active": {
    backgroundColor: palette.sideBarButtonBackground,
    borderRight: `5px solid ${palette.primary}`,
  },

  "& .MuiButton-endIcon": {
    display: "flex",
    justifyContent: "flex-end",
    color: palette.blackText,
    opacity: 0.4,
  },

  "&.active .MuiButton-endIcon": {
    display: "flex",
    justifyContent: "flex-end",
    color: palette.primary,
    opacity: 1,
  },
});

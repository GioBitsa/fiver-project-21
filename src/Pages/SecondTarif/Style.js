import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../Shared/palette";

export const ChooseButton = styled(Box)({
  cursor: "pointer",
  border: "1px solid rgba(0, 0, 0, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
  borderRadius: "7px",
  minWidth: "300px",

  "& span": {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "25px",
    height: "25px",
    borderRadius: "100%",
    backgroundColor: "transparent",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    marginRight: "10px",
  },

  "& span svg": {
    display: "none",
    color: palette.whiteText,
  },

  "& h5": {
    display: "inline-block",
    color: palette.blackText,
    fontWeight: "bold",
  },

  "&.active": {
    border: `1px solid ${palette.primary}`,
  },

  "&.active span": {
    backgroundColor: palette.primary,
    border: `1px solid ${palette.primary}`,
  },

  "&.active span svg": {
    display: "block",
  },

  "@media screen and (max-width: 900px)": {
    margin: "10px 0",
  },
});

export const ButtonDetails = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-start",

  "& h6": {
    color: palette.blackText,
    fontWeight: "bold",
    fontSize: "15px",
  },

  "& p": {
    color: palette.blackText,
    opacity: 0.5,
    fontSize: "12px",
  },
});

export const RadioText = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",

  "& span": {
    display: "inline-block",
    width: "20px",
    height: "20px",
    borderRadius: "100%",
    backgroundColor: palette.lightPrimary,
    marginRight: "10px",
  },
});

export const DisabledRadioText = styled(Box)({
  display: "flex",
  alignItems: "center",
  marginBottom: "10px",
  marginLeft: "20px",

  "& span": {
    display: "inline-block",
    width: "20px",
    height: "20px",
    borderRadius: "100%",
    backgroundColor: "transparent",
    border: "1px solid rgba(0, 0, 0, 0.5)",
    marginRight: "10px",
  },
});

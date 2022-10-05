import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import palette from "../../../Shared/palette";

export const MyDesktopDatePicker = styled(DesktopDatePicker)({
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.06)",
  marginBottom: "24px",

  "& input": {
    color: "rgba(34, 34, 34, 0.8)",
  },

  "& fieldset": {
    border: "none",
  },
});

export const ProgramContainer = styled(Stack)({
  padding: "10px",
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.06)",
  marginBottom: "24px",
  maxWidth: "350px",

  "& img": {
    width: "50px",
    height: "50px",
    objectFit: "contain",
  },

  "& h3": {
    fontSize: "16px",
    fontWeight: "600",
    color: palette.blackText,
    opacity: 0.8,
    marginBottom: "8px",
  },

  "& p": {
    fontSize: "24px",
    fontWeight: "600",
    color: palette.primary,
  },
});

export const InteractionsContainer = styled(Stack)({
  padding: "0 20px",
  height: "45px",

  "& img": {
    width: "24px",
    height: "24px",
    objectFit: "contain",
  },

  "& h3": {
    fontSize: "12px",
    fontWeight: "600",
  },
});

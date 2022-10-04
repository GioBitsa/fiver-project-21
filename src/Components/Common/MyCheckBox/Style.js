import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../../Shared/palette";

export const Item = styled(Stack)({
  width: "100%",
  backgroundColor: palette.whiteText,
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.1)",
  padding: "20px",
  marginBottom: "16px",

  "& h3": {
    color: palette.blackText,
    fontSize: "16px",
    fontWeight: 500,
  },

  "& p": {
    color: palette.blackText,
    opacity: 0.6,
    fontSize: "13px",
  },

  "&.active h3": {
    color: palette.primary,
  },
});

export const CheckboxIcon = styled(Box)({
  width: "20px",
  height: "20px",
  borderRadius: "5px",
  border: "1px solid rgba(34, 34, 34, 0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",

  "& svg": {
    display: "none",
    color: palette.whiteText,
  },

  "&.active": {
    backgroundColor: palette.primary,
    borderColor: palette.primary,
  },

  "&.active svg": {
    display: "block",
  },
});

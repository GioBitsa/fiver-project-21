import { styled } from "@mui/system";
import { Box, InputLabel } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import palette from "../../../Shared/palette";

export const InputContainer = styled(Box)({
  width: "100%",
  marginBottom: "30px",
});

export const MyInputLabel = styled(InputLabel)({
  fontSize: "14px !important",
  marginBottom: "10px",
});

export const MyDesktopDatePicker = styled(DesktopDatePicker)({
  width: "100%",
  height: "42px",

  "&>div": {
    height: "42px",
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.42)",
    borderRadius: 0,
  },

  ".Mui-focused fieldset": {
    borderBottom: `2px solid ${palette.primary} !important`,
  },

  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderWidth: "2px !important",
  },
});

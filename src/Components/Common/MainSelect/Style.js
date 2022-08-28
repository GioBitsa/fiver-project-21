import { styled } from "@mui/system";
import { Box, Select, InputLabel } from "@mui/material";
import palette from "../../../Shared/palette";

export const InputContainer = styled(Box)({
  width: "100%",
  marginBottom: "30px",
});

export const MyInputLabel = styled(InputLabel)({
  fontSize: "14px !important",
  marginBottom: "10px",
});

export const MySelect = styled(Select)({
  width: "100%",

  "& > div": {
    paddingLeft: 0,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
    borderBottom: "1px solid rgba(0,0,0,0.42)",
    borderRadius: 0,
  },

  "&.Mui-focused fieldset": {
    borderBottom: `2px solid ${palette.primary} !important`,
  },
});

import { Box, Input, InputLabel } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../../Shared/palette";

export const InputContainer = styled(Box)({
  width: "100%",
  marginBottom: "30px",
});

export const MyInputLabel = styled(InputLabel)({
  fontSize: "14px !important",
  marginBottom: "10px",
});

export const MyInput = styled(Input)({
  width: "100% !important",
  paddingBottom: "10px",

  ":after": {
    borderBottomColor: palette.primary,
  },
});

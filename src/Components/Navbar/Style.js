import { Button } from "@mui/material";
import { styled } from "@mui/system";
import palette from "../../Shared/palette";

export const MyButton = styled(Button)({
  color: palette.blackText,
  fontWeight: 500,

  "&:hover": {
    backgroundColor: "transparent",
  },
});

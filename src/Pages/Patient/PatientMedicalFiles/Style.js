import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../../Shared/palette";

export const MyItem = styled(Box)({
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.05)",
  padding: "20px",
  backgroundColor: palette.whiteText,

  "@media screen and (max-width: 900px)": {
    padding: "20px 0",
  },
});

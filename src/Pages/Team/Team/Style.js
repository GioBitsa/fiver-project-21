import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../../Shared/palette";

export const MyButton = styled(Box)({
  width: "250px",
  height: "35px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 500,
  color: "rgba(34, 34, 34, 0.4)",
  backgroundColor: palette.disabled,
  cursor: "pointer",

  "&.active": {
    background: palette.linearVerticaly,
    color: palette.whiteText,
  },

  "@media screen and (max-width: 900px)": {
    width: "100%",
  },
});

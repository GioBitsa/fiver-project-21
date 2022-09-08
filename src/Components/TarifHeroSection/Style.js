import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import palette from "../../Shared/palette";

export const Title = styled(Typography)({
  color: palette.whiteText,
  fontSize: "50px",
  position: "relative",

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "25%",
    height: "2px",
    backgroundColor: palette.whiteText,
  },
});

export const MyButton = styled(Box)({});

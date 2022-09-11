import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../Shared/palette";

export const MyItem = styled(Box)({
  padding: "20px",
  backgroundColor: palette.whiteText,
  display: "flex",
  alignItems: "center",
  height: "100%",
  borderRadius: "5px",
});

export const IconContainer = styled(Box)({
  flex: 1,
  maxWidth: "80px",
  height: "80px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: palette.lightPrimary,
  borderRadius: "10px",
});

export const Content = styled(Box)({
  flex: 3,
  marginLeft: "20px",

  "& h6": {
    fontWeight: "bold",
    fontSize: "16px",
    color: palette.black,
  },

  "& p": {
    fontSize: "14px",
    color: palette.blackText,
    opacity: 0.8,
  },
});

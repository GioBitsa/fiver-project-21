import { styled } from "@mui/system";
import { Stack } from "@mui/material";

export const SignItem = styled(Stack)({
  alignItems: "center",
  flexDirection: "row",
  fontSize: "12px",

  "& span": {
    width: "60px",
    height: "16px",
    marginRight: "5px",
    opacity: "0.6",
  },

  "@media screen and (max-width: 450px)": {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});

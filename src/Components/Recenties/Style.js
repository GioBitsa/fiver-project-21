import { styled } from "@mui/system";
import { Box } from "@mui/material";
import palette from "../../Shared/palette";

export const Item = styled(Box)({
  padding: "30px",
  height: "100%",
  backgroundColor: palette.whiteText,
  borderRadius: "5px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
  marginBottom: "24px",

  "& h3": {
    color: palette.primary,
    fontSize: "16px",
    fontWeight: 500,
  },

  "& h6": {
    color: palette.blackText,
    fontSize: "12px",
    cursor: "pointer",
    padding: "5px",
  },

  "@media screen and (max-width: 900px)": {
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "1px solid rgba(34, 34, 34, 0.2)",
  },

  "@media screen and (max-width: 450px)": {
    padding: "30px 20px",
  },
});

export const MyButton = styled(Box)({
  width: "175px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "14px",
  fontWeight: 500,
  color: "rgba(34, 34, 34, 0.4)",
  backgroundColor: palette.disabled,

  "&.active": {
    backgroundColor: palette.primary,
    color: palette.whiteText,
  },

  "@media screen and (max-width: 600px)": {
    width: "100%",
  },
});

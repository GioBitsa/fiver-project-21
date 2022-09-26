import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const ScheduleContainer = styled(Box)({
  width: "100%",
  maxWidth: "450px",
  margin: 0,
  border: "1px solid rgba(34, 34, 34, 0.1)",
  padding: "16px 20px",
  borderRadius: "5px",
});

export const ScheduleHeader = styled(Stack)({
  margin: "10px 0",

  "& h4": {
    fontSize: "18px",
    fontWeight: "600",
    color: palette.lightPrimary,
  },

  "& svg": {
    color: palette.blackText,
    fontSize: "22px",
    cursor: "pointer",
  },
});

export const MyScheduleItem = styled(Box)({
  height: "40px",
  border: "1px solid rgba(34, 34, 34, 0.4)",
  borderRadius: "10px",
  width: "100%",
  color: "rgba(34, 34, 34, 0.4)",
  fontSize: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",

  "&.reserved": {
    backgroundColor: palette.reserved,
    border: `1px solid ${palette.reserved}`,
    textDecoration: "line-through",
  },

  "&.active": {
    background: palette.linearVerticaly,
    border: "1px solid transparent",
    color: palette.whiteText,
  },
});

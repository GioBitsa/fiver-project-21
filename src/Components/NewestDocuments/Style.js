import { styled } from "@mui/system";
import { Box, Stack } from "@mui/material";
import palette from "../../Shared/palette";

export const FileItem = styled(Stack)({
  margin: "20px 0",
  padding: "10px 20px",
  borderRadius: "5px",

  "@media screen and (max-width: 900px)": {
    border: "1px solid rgba(34, 34, 34, 0.1)",
  },
});

export const FileDetails = styled(Stack)({
  "& h6": {
    color: palette.blackText,
    fontSize: "14px",
    fontWeight: 500,
  },

  "& span": {
    color: palette.blackText,
    fontSize: "12px",
    opacity: 0.5,
  },
});

export const DownloadButtonContainer = styled(Box)({
  cursor: "pointer",
});

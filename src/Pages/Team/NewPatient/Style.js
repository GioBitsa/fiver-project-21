import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { MainButton } from "../../../Components/Common";
import palette from "../../../Shared/palette";

export const MyButton = styled(MainButton)({
  backgroundColor: "#E8E8E8",
  color: palette.blackText,
  opacity: 0.6,
  whiteSpace: "nowrap",
  fontWeight: "600",

  "&.active": {
    backgroundColor: palette.primary,
    color: palette.whiteText,
    opacity: 1,

    "&:hover": {
      backgroundColor: palette.primary,
    },
  },

  "&:hover": {
    backgroundColor: "#E8E8E8",
  },

  "@media screen and (max-width: 599px)": {
    flex: 1,
  },
});

export const Item = styled(Box)({
  width: "100%",
  flex: 1,
  backgroundColor: palette.whiteText,
  padding: "15px 20px",

  "& h5": {
    color: palette.primary,
    fontSize: "18px",
    fontWeight: 600,
    marginBottom: "10px",
  },

  "& h6": {
    color: palette.blackText,
    opacity: 0.8,
    fontSize: "12px",
  },

  "&::-webkit-scrollbar": {
    background: "#E6E6E6 !important",
    width: "5px",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "#14B8A6 !important",
    borderRadius: " 0 0 10px 10px",
  },
});

export const QRCode = styled("img")({
  display: "block",
  margin: "50px auto",
  width: "100%",
  maxWidth: "300px",
  objectFit: "contain",

  "@media screen and (max-width: 899px)": {
    maxWidth: "150px",
    margin: "20px auto",
  },
});

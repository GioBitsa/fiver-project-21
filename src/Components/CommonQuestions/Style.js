import { styled } from "@mui/system";
import { Accordion } from "@mui/material";
import palette from "../../Shared/palette";

export const MyAccordion = styled(Accordion)({
  backgroundColor: palette.primary,
  color: palette.whiteText,
  borderRadius: "8px",
  boxShadow: "none",

  "&>div": {
    minHeight: "100px",
  },

  "& .MuiAccordionSummary-expandIconWrapper": {
    width: "40px",
    height: "40px",
    backgroundColor: palette.whiteText,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },

  "& .MuiAccordionSummary-expandIconWrapper svg": {
    width: "40px",
    fontSize: "20px",
    color: palette.black,
  },

  "& .MuiAccordionDetails-root .MuiTypography-root": {
    fontSize: "14px",
  },

  "@media screen and (max-width: 1150px)": {
    "&>div": {
      minHeight: "120px",
    },
  },

  "@media screen and (max-width: 1000px)": {
    "&>div": {
      minHeight: "140px",
    },
  },

  "@media screen and (max-width: 900px)": {
    "&>div": {
      minHeight: "80px",
    },
  },
});

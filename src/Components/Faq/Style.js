import { styled } from "@mui/system";
import palette from "../../Shared/palette";
import { Accordion, Typography } from "@mui/material";

export const Title = styled(Typography)({
  color: palette.grey,
  fontSize: "3rem",
  fontWeight: "bold",
  marginBottom: "20px",
});

export const MyAccordion = styled(Accordion)({
  backgroundColor: palette.lightPrimary,
  color: palette.whiteText,
  margin: "20px 0",
  padding: "10px 0",
  borderRadius: "5px",
  boxShadow: "none",

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
});

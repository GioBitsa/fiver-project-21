import { styled } from "@mui/system";
import palette from "../../Shared/palette";

export const MyKendoReact = styled("div")({
  "& .k-button": {
    backgroundColor: "transparent",
    borderColor: palette.primary,
    color: palette.primary,
  },

  "& .k-i-close::before, .k-i-x::before": {
    content: '"x"',
  },

  "& .k-event-template": {
    backgroundColor: palette.primary,
  },

  "& .k-sticky-cell": {
    width: "300px ",
  },

  "& .k-scheduler-body > div": {
    height: "auto !important",
  },
});

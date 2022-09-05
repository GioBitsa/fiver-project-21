import { styled } from "@mui/system";
import palette from "../../Shared/palette";

export const BackgroundImage = styled("img")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: -1,
  transform: "translate(20px, 20px)",
});

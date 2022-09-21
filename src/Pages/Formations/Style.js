import { styled } from "@mui/system";
import { Box } from "@mui/material";
import HeroImage from "../../Assets/Formations/HeroImage.png";

export const HeroContainer = styled(Box)({
  backgroundImage: `url(${HeroImage})`,
  backgroundPosition: "top",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "calc(100vh - 200px)",
  maxHeight: "800px",

  "@media screen and (max-width: 900px)": {
    backgroundImage: "initial",
    maxHeight: "initial",
  },
});

import React from "react";
import {
  Announcement,
  Footer,
  Navbar,
  SingleProductSection,
} from "../../Components";
import { Typography, Container, Box, Stack } from "@mui/material";
import palette from "../../Shared/palette";
import HighLight from "../../Assets/HighLight.png";
import { MainButton, OutlineMainButton } from "../../Components/Common";

const Products = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 5, position: "relative" }}>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            display: { xs: "block", md: "none" },
            color: palette.primary,
            fontSize: "30px",
            fontWeight: "600",
            mb: 2,
          }}
        >
          MobilityCare
        </Typography>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: { xs: "26px", sm: "38px", md: "33px", lg: "50px" },
            fontWeight: "900",
            lineHeight: { xs: "50px", lg: "70px" },
            color: palette.black,
            mb: 2,
          }}
        >
          Nos{" "}
          <Box
            sx={{
              display: "inline-block",
              position: "relative",
              color: palette.primary,
              mr: 2,
            }}
          >
            <img className="highLight" src={HighLight} alt="highlight" />
            solutions
          </Box>
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{ maxWidth: "700px", color: palette.blackText, opacity: 0.8 }}
        >
          Notre concept est né de la volonté d’humaniser la télémédecine et de
          permettre à tous les patients, déficitaires ou non, où qu’ils soient
          et à n’importe quelle heure de pouvoir bénéficier d’une
          téléconsultation complète, efficiente et surtout plus humaine.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: "50px" }}
        >
          <MainButton text="Démarer maintenant" />
          <OutlineMainButton text="Pour en  savoir plus sur notre solution" />
        </Stack>
      </Container>
      <SingleProductSection align="right" />
      <Footer />
    </>
  );
};

export default Products;

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { MyAccordion } from "./Style";
import palette from "../../Shared/palette";
import { BiChevronDown } from "react-icons/bi";

const CommonQuestions = () => {
  return (
    <Box sx={{ backgroundColor: palette.navbarBackground, py: "50px" }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "33px", md: "48px" },
            mb: 4,
          }}
        >
          Questions habituelles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <MyAccordion>
              <AccordionSummary expandIcon={<BiChevronDown />}>
                <Typography>
                  En combien de temps peut-on bénéficier d’une consultation ?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nous pouvons vous proposer notre solution premium connexion
                  qui est capable grâce a sa technologie breveté de fonctionner
                  même en zone blanche.
                </Typography>
              </AccordionDetails>
            </MyAccordion>
          </Grid>
          <Grid item xs={12} md={3}>
            <MyAccordion>
              <AccordionSummary expandIcon={<BiChevronDown />}>
                <Typography>Qui peut réaliser les consultations ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nous pouvons vous proposer notre solution premium connexion
                  qui est capable grâce a sa technologie breveté de fonctionner
                  même en zone blanche.
                </Typography>
              </AccordionDetails>
            </MyAccordion>
          </Grid>
          <Grid item xs={12} md={3}>
            <MyAccordion>
              <AccordionSummary expandIcon={<BiChevronDown />}>
                <Typography>Combien coûte la prestation ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nous pouvons vous proposer notre solution premium connexion
                  qui est capable grâce a sa technologie breveté de fonctionner
                  même en zone blanche.
                </Typography>
              </AccordionDetails>
            </MyAccordion>
          </Grid>
          <Grid item xs={12} md={3}>
            <MyAccordion>
              <AccordionSummary expandIcon={<BiChevronDown />}>
                <Typography>Qui a accès a mon dossier médical ?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nous pouvons vous proposer notre solution premium connexion
                  qui est capable grâce a sa technologie breveté de fonctionner
                  même en zone blanche.
                </Typography>
              </AccordionDetails>
            </MyAccordion>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CommonQuestions;

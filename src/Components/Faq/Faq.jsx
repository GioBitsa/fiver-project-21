import React from "react";
import {
  AccordionSummary,
  Typography,
  AccordionDetails,
  Container,
} from "@mui/material";
import { BiChevronDown } from "react-icons/bi";
import { MyAccordion, Title } from "./Style";

const Faq = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Title component="h2" variant="h2">
        FAQ
      </Title>
      <MyAccordion defaultExpanded>
        <AccordionSummary expandIcon={<BiChevronDown />}>
          <Typography>
            1. Nous sommes en zones blanches, est-ce que votre concept
            fonctionne quand même ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nous pouvons vous proposer notre solution premium connexion qui est
            capable grâce a sa technologie breveté de fonctionner même en zone
            blanche.
          </Typography>
        </AccordionDetails>
      </MyAccordion>

      <MyAccordion>
        <AccordionSummary expandIcon={<BiChevronDown />}>
          <Typography>2. Qui peut réaliser les consultations ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nous pouvons vous proposer notre solution premium connexion qui est
            capable grâce a sa technologie breveté de fonctionner même en zone
            blanche.
          </Typography>
        </AccordionDetails>
      </MyAccordion>

      <MyAccordion>
        <AccordionSummary expandIcon={<BiChevronDown />}>
          <Typography>
            3. Quelle grosse différence avec les télécabines ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nous pouvons vous proposer notre solution premium connexion qui est
            capable grâce a sa technologie breveté de fonctionner même en zone
            blanche.
          </Typography>
        </AccordionDetails>
      </MyAccordion>

      <MyAccordion>
        <AccordionSummary expandIcon={<BiChevronDown />}>
          <Typography>
            4. En combien de temps peut-on avoir accès à une téléconsultation
            assistée?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nous pouvons vous proposer notre solution premium connexion qui est
            capable grâce a sa technologie breveté de fonctionner même en zone
            blanche.
          </Typography>
        </AccordionDetails>
      </MyAccordion>
    </Container>
  );
};

export default Faq;

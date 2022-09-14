import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import {
  IconName,
  Header,
  IconContainer,
  MyGrid,
  SmallDevideImage,
  DetailsParagraph,
} from "./Style";
import palette from "../../Shared/palette";
import CabinetMainImage from "../../Assets/CabinetMainImage.png";
import CabinetImage1 from "../../Assets/Icons/CabinetImage (1).png";
import CabinetImage2 from "../../Assets/Icons/CabinetImage (2).png";
import CabinetImage3 from "../../Assets/Icons/CabinetImage (3).png";
import CabinetImage4 from "../../Assets/Icons/CabinetImage (4).png";
import CabinetImage5 from "../../Assets/Icons/CabinetImage (5).png";
import CabinetImage6 from "../../Assets/Icons/CabinetImage (6).png";
import CabinetImage7 from "../../Assets/Icons/CabinetImage (7).png";
import CabinetImage8 from "../../Assets/Icons/CabinetImage (8).png";
import CabinetImage9 from "../../Assets/Icons/CabinetImage (9).png";
import CabinetImage10 from "../../Assets/Icons/CabinetImage (10).png";
import CabinetImage11 from "../../Assets/Icons/CabinetImage (11).png";
import CabinetImage12 from "../../Assets/Icons/CabinetImage (12).png";
import CabinetImage13 from "../../Assets/Icons/CabinetImage (13).png";
import CabinetImage14 from "../../Assets/Icons/CabinetImage (14).png";
import { OutlineMainButton } from "../Common";

const data = [
  {
    src: CabinetImage1,
    text: "Sthétoscope",
  },
  {
    src: CabinetImage2,
    text: "Thermomètre",
  },
  {
    src: CabinetImage12,
    text: "Thermomètre",
  },
  {
    src: CabinetImage14,
    text: "Saturomètre",
  },
  {
    src: CabinetImage11,
    text: "Abaisse langue",
  },
  {
    src: CabinetImage10,
    text: "Balance",
  },
  {
    src: CabinetMainImage,
    text: null,
    className: "mainImage",
  },
  {
    src: CabinetImage9,
    text: "ECG",
  },
  {
    src: CabinetImage8,
    text: "Dermatoscope",
  },
  {
    src: CabinetImage7,
    text: "Analyseur d’urine",
  },
  {
    src: CabinetImage6,
    text: "Lecteur de glycémie",
  },
  {
    src: CabinetImage5,
    text: "Otoscope",
  },
  {
    src: CabinetImage4,
    text: "Lecteur de carte vitale",
  },
  {
    src: CabinetImage3,
    text: "Terminal de paiement",
  },
  {
    src: CabinetImage13,
    text: "Imprimante",
  },
];

const CabinetComponent = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ backgroundColor: palette.lightGrey, py: 5, my: "50px" }}
    >
      <Header component="h2" variant="h3s">
        Le E-cabinet en quelques mots
      </Header>
      <MyGrid
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 3,
        }}
      >
        {data.map((item, index) => (
          <Stack
            key={index}
            className={item.className}
            alignItems="center"
            justifyContent="center"
          >
            <IconContainer>
              <img src={item.src} alt="icon" />
            </IconContainer>
            <IconName component="p" variant="p">
              {item.text}
            </IconName>
          </Stack>
        ))}
      </MyGrid>
      <SmallDevideImage>
        <img src={CabinetMainImage} alt="cabinet" />
      </SmallDevideImage>
      <Box sx={{ mt: 5 }}>
        <Typography
          component="h4"
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: "21px",
            color: { xs: palette.primary, sm: palette.blackText },
          }}
        >
          Détails
        </Typography>
        <DetailsParagraph component="p" variant="p">
          Avec plus de 11 300 communes définies comme des déserts médicaux,
          certains citoyens ne peuvent accéder à des soins de qualité.. Même
          hors désert médical, certaines situations font qu’il est difficile de
          pouvoir se déplcer chez le médecin.
        </DetailsParagraph>
        <DetailsParagraph component="p" variant="p">
          Notre concept grâce aux différentes solutions mobiles qu’il propose,
          permet de répondre aux besoins de santé que se soit en milieux
          urbains, semi-urbains et même ruraux afin de répondre au besoin
          citoyen d’accès aux soins.
        </DetailsParagraph>
        <DetailsParagraph component="p" variant="p" sx={{ mb: "20px" }}>
          En plus de ces 12 dispositifs médicaux sans fil, le e-cabinet dispose
          de tout les périphériques utiles lors d’une consultation, ainsi on y
          retrouve : un lecteur de carte vital, un terminal de paiement, une
          imprimante A4, un procédé de desinfection automatique ainsi que tout
          les consommables nécessaires pour que les conditions d’hygiènes pour
          les patients et les assistants soient respectée.
        </DetailsParagraph>
        <OutlineMainButton text="Encore plus ?" />
      </Box>
    </Container>
  );
};

export default CabinetComponent;

import React from "react";
import {
  Announcement,
  Footer,
  Navbar,
  SingleProductSection,
} from "../../Components";
import { Typography, Container, Box, Stack, Grid } from "@mui/material";
import palette from "../../Shared/palette";
import HighLight from "../../Assets/HighLight.png";
import { MainButton, OutlineMainButton } from "../../Components/Common";
import FirstTarifProduct from "../../Assets/Tarif/FirstTarifProduct.png";
import FirstTarifProductStack1 from "../../Assets/Tarif/FirstTarifProductStack (1).png";
import FirstTarifProductStack2 from "../../Assets/Tarif/FirstTarifProductStack (2).png";
import SecondTarifProduct from "../../Assets/Tarif/SecondTarifProduct.png";
import SecondTarifProductStack1 from "../../Assets/Tarif/SecondTarifProductStack (1).png";
import SecondTarifProductStack2 from "../../Assets/Tarif/SecondTarifProductStack (2).png";
import SecondTarifProductStack3 from "../../Assets/Tarif/SecondTarifProductStack (3).png";
import ThirdTarifProduct from "../../Assets/Tarif/ThirdTarifProduct.png";
import ThirdTarifProductStack1 from "../../Assets/Tarif/ThirdTarifProductStack (1).png";
import ThirdTarifProductStack2 from "../../Assets/Tarif/ThirdTarifProductStack (2).png";
import Baterry from "../../Assets/Baterry.png";
import TopSpeed from "../../Assets/TopSpeed.png";
import Time from "../../Assets/Time.png";
import Distance from "../../Assets/Distance.png";

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
      <SingleProductSection
        align="right"
        mainImage={FirstTarifProduct}
        imageStack={[FirstTarifProductStack1, FirstTarifProductStack2]}
        mainTitle="E-cabinet"
        contentTitle="Le Mediscoot est une association ingénieuse entre le e-cabinet et un tricycle électrique: "
      >
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.blackText,
            opacity: 0.8,
            lineHeight: "2.2rem",
            my: 3,
          }}
        >
          Impossibilité de réaliser un examen clinique complet <br />
          Difficulté d’utilisation des outils technologiques par les patients,
          <br /> Réseaux et connectivités instables <br />
          Absence de contact humain et d’accompagnement.
        </Typography>
        <Typography
          component="h6"
          variant="h6"
          sx={{
            color: palette.blackText,
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          En plus des 12 dispositifs médicaux connectés, le e-cabinet dispose :
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.blackText,
            opacity: 0.8,
            lineHeight: "2rem",
            my: 3,
          }}
        >
          d’un système de désinfection intégré, <br />
          d’un lecteur de carte vitale, <br /> d”un terminal de paiement,
          <br />
          d’une imprimante au format A4.
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.blackText,
            opacity: 0.8,
          }}
        >
          Le tout est connecté en 4G et 5G sur certaines zones, ce qui lui
          permet d’être rapide efficace dans le transfert de données et la télé
          consultation.
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: "flex-start", md: "flex-end" }}
          sx={{ my: 3 }}
        >
          <img src={Baterry} alt="baterry" />
          <Typography
            component="h6"
            variant="h6"
            sx={{ color: palette.lightPrimary, fontSize: "18px" }}
          >
            Autonomie en fonctionnement : 8h
          </Typography>
        </Stack>
      </SingleProductSection>
      <SingleProductSection
        align="left"
        mainImage={SecondTarifProduct}
        imageStack={[
          SecondTarifProductStack1,
          SecondTarifProductStack2,
          SecondTarifProductStack3,
        ]}
        mainTitle="MediScoot"
        contentTitle="Le Mediscoot est une association ingénieuse entre le e-cabinet et un tricycle électrique: "
      >
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.blackText,
            opacity: 0.8,
            my: 3,
          }}
        >
          Support motorisé 100% électrique. <br />
          Ce véhicule s’inscrit dans une démarche écologique dont l’accès est
          possible à tous car sans permis ! <br />
          Il permet aux assistant d’avoir une réactivité accrue en milieu urbain
          tout en disposant d’un matériel médical complet. <br /> Où que se soit
          et à n’importe quelle heure, le MediScoot permet de pouvoir bénéficier
          d’une téléconsultation complète.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} lg={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-start"
            >
              <img src={TopSpeed} alt="TopSpeed" />
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.lightPrimary, fontWeight: "bold" }}
              >
                Vitesse max : 25 km/h
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-start"
            >
              <img src={Distance} alt="Distance" />
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.lightPrimary, fontWeight: "bold" }}
              >
                Périmètre d’utilisation : <br />{" "}
                <span
                  style={{
                    fontSize: "14px",
                    color: palette.blackText,
                    fontWeight: "400",
                    opacity: 0.5,
                  }}
                >
                  1 à 5 km du point de départ
                </span>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-start"
            >
              <img src={Baterry} alt="Baterry" />
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.lightPrimary, fontWeight: "bold" }}
              >
                Autonomie : 40 km
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent="flex-start"
            >
              <img src={Time} alt="Time" />
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.lightPrimary, fontWeight: "bold" }}
              >
                Temps de charge : 4h30 heures
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </SingleProductSection>
      <SingleProductSection
        align="right"
        mainImage={ThirdTarifProduct}
        imageStack={[ThirdTarifProductStack1, ThirdTarifProductStack2]}
        mainTitle="MediCar"
        contentTitle="La MediCar, disponible prochainement"
      >
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.blackText,
            opacity: 0.8,
            my: 3,
          }}
        >
          Permet aux professionnels de santé de se déplacer dans un secteur
          semi-urbain ou rural aisément. <br />
          Le Mediscoot est une association du e-cabinet et d’une voiture
          électrique. <br />
          Cette voiture électrique sans permis est optimisée pour contenir le
          e-cabinet sans gêner le conducteur. <br />
          Ainsi, le soignant pourra se déplacer confortablement dans des
          secteurs plus éloignés que ceux couverts par le MediScoot.
        </Typography>
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} lg={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <img src={TopSpeed} alt="TopSpeed" />
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.lightPrimary, fontWeight: "bold" }}
              >
                Vitesse max : 45 km
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <img src={Distance} alt="Distance" />
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.lightPrimary, fontWeight: "bold" }}
              >
                Périmètre d’utilisation <br />{" "}
                <span
                  style={{
                    fontSize: "14px",
                    color: palette.blackText,
                    fontWeight: "400",
                    opacity: 0.5,
                  }}
                >
                  5km du point de depart.
                </span>
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <img src={Baterry} alt="Baterry" />
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.lightPrimary, fontWeight: "bold" }}
              >
                Autonomie : 75 km <br />
                (Usage selon norme WMTC)
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <img src={Time} alt="Time" />
              <Typography
                component="p"
                variant="p"
                sx={{ color: palette.lightPrimary, fontWeight: "bold" }}
              >
                Temps de charge : 3 heures
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </SingleProductSection>
      <Footer />
    </>
  );
};

export default Products;

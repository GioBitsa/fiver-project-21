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
import FirstTarifProduct1 from "../../Assets/Tarif/FirstTarifProduct (1).png";
import FirstTarifProduct2 from "../../Assets/Tarif/FirstTarifProduct (2).jpeg";
import SecondTarifProduct1 from "../../Assets/Tarif/SecondTarifProduct (1).png";
import SecondTarifProduct2 from "../../Assets/Tarif/SecondTarifProduct (2).png";
import SecondTarifProduct3 from "../../Assets/Tarif/SecondTarifProduct (3).png";
import ThirdTarifProduct1 from "../../Assets/Tarif/ThirdTarifProduct (1).png";
import ThirdTarifProduct2 from "../../Assets/Tarif/ThirdTarifProduct (2).png";
import Baterry from "../../Assets/Icons/Baterry.png";
import TopSpeed from "../../Assets/Icons/TopSpeed.png";
import Time from "../../Assets/Icons/Time.png";
import Distance from "../../Assets/Icons/Distance.png";

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
          Notre concept est n?? de la volont?? d???humaniser la t??l??m??decine et de
          permettre ?? tous les patients, d??ficitaires ou non, o?? qu???ils soient
          et ?? n???importe quelle heure de pouvoir b??n??ficier d???une
          t??l??consultation compl??te, efficiente et surtout plus humaine.
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ mt: "50px" }}
        >
          <MainButton text="D??marer maintenant" />
          <OutlineMainButton text="Pour en  savoir plus sur notre solution" />
        </Stack>
      </Container>
      <SingleProductSection
        align="right"
        mainImage={FirstTarifProduct1}
        imageStack={[FirstTarifProduct1, FirstTarifProduct2]}
        mainTitle="E-cabinet"
        contentTitle="Le Mediscoot est une association ing??nieuse entre le e-cabinet et un tricycle ??lectrique: "
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
          Impossibilit?? de r??aliser un examen clinique complet <br />
          Difficult?? d???utilisation des outils technologiques par les patients,
          <br /> R??seaux et connectivit??s instables <br />
          Absence de contact humain et d???accompagnement.
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
          En plus des 12 dispositifs m??dicaux connect??s, le e-cabinet dispose :
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
          d???un syst??me de d??sinfection int??gr??, <br />
          d???un lecteur de carte vitale, <br /> d???un terminal de paiement,
          <br />
          d???une imprimante au format A4.
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.blackText,
            opacity: 0.8,
          }}
        >
          Le tout est connect?? en 4G et 5G sur certaines zones, ce qui lui
          permet d?????tre rapide efficace dans le transfert de donn??es et la t??l??
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
        mainImage={SecondTarifProduct1}
        imageStack={[
          SecondTarifProduct2,
          SecondTarifProduct1,
          SecondTarifProduct3,
        ]}
        mainTitle="MediScoot"
        contentTitle="Le Mediscoot est une association ing??nieuse entre le e-cabinet et un tricycle ??lectrique: "
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
          Support motoris?? 100% ??lectrique. <br />
          Ce v??hicule s???inscrit dans une d??marche ??cologique dont l???acc??s est
          possible ?? tous car sans permis ! <br />
          Il permet aux assistant d???avoir une r??activit?? accrue en milieu urbain
          tout en disposant d???un mat??riel m??dical complet. <br /> O?? que se soit
          et ?? n???importe quelle heure, le MediScoot permet de pouvoir b??n??ficier
          d???une t??l??consultation compl??te.
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
                P??rim??tre d???utilisation : <br />{" "}
                <span
                  style={{
                    fontSize: "14px",
                    color: palette.blackText,
                    fontWeight: "400",
                    opacity: 0.5,
                  }}
                >
                  1 ?? 5 km du point de d??part
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
        mainImage={ThirdTarifProduct1}
        imageStack={[ThirdTarifProduct1, ThirdTarifProduct2]}
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
          Permet aux professionnels de sant?? de se d??placer dans un secteur
          semi-urbain ou rural ais??ment. <br />
          Le Mediscoot est une association du e-cabinet et d???une voiture
          ??lectrique. <br />
          Cette voiture ??lectrique sans permis est optimis??e pour contenir le
          e-cabinet sans g??ner le conducteur. <br />
          Ainsi, le soignant pourra se d??placer confortablement dans des
          secteurs plus ??loign??s que ceux couverts par le MediScoot.
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
                P??rim??tre d???utilisation <br />{" "}
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

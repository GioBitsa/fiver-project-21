import React from "react";
import {
  Announcement,
  Footer,
  Navbar,
  HeroImageContainer,
  CommonQuestions,
} from "../../Components";
import PrioriteHeroImage from "../../Assets/Priorite/PrioriteHeroImage.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box, Grid } from "@mui/material";
import { MainButton, OutlineMainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import { NestedGrid, LeftGrid, RightGrid, MyItem, SocialButton } from "./Style";
import Lottie from "lottie-react";
import PrioriteSvg1 from "../../Assets/Priorite/PrioriteSvg (1).png";
import PrioriteSvg2 from "../../Assets/Priorite/PrioriteSvg (2).png";
import PrioriteSvg3 from "../../Assets/Priorite/PrioriteSvg (3).png";
import PrioriteSvg4 from "../../Assets/Priorite/PrioriteSvg (4).png";
import PrioriteSvg5 from "../../Assets/Priorite/PrioriteSvg (5).png";
import PrioriteSvg6 from "../../Assets/Priorite/PrioriteSvg (6).png";
import GooglePlay from "../../Assets/Icons/GooglePlay.png";
import AppStore from "../../Assets/Icons/AppStore.png";
import animationData from "../../Assets/Animations/Priorite/jaanoun.json";

const Priorite = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={3}
        >
          <Box>
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
                mb: 3,
              }}
            >
              Le{" "}
              <Box
                sx={{
                  display: "inline-block",
                  position: "relative",
                  color: palette.primary,
                  mr: 2,
                }}
              >
                <img
                  style={{
                    left: "100%",
                    transform: "translateX(-50%)",
                    top: "-15px",
                  }}
                  className="highLight"
                  src={HighLight}
                  alt="highlight"
                />
                patient
              </Box>
              notre <br />
              priorit??
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontWeight: "300", mb: 3 }}
            >
              Vous n???avez pas acc??s ?? un m??decin mais vous rechercher le contact
              humain et une consultation de qualit??, Mobility Care repond a
              votre besoin. Notre solution vous permet de r??duire vos
              d??placements et vos d??lais d???attentes pour obtenir une
              consultation m??dicale. Notre solution de t??l??medecine vous permet
              d'avoir recours aux soins dont vous avez besoin sans avoir ?? se
              d??placer et ceci 24h/24 et 7j/7.
            </Typography>
            <OutlineMainButton
              sx={{ mt: 5, display: { xs: "none", md: "inline-flex" } }}
              text="S???inscrire d??s maintenant"
            />
          </Box>
          <Stack alignItems="center" spacing={3}>
            <HeroImageContainer
              main={PrioriteHeroImage}
              background={HeroImageBackground}
            />
            <OutlineMainButton
              sx={{ display: { xs: "inline-flex", md: "none" } }}
              text="S???inscrire d??s maintenant"
            />
          </Stack>
        </Stack>
      </Container>
      <Box
        sx={{
          background: {
            xs: palette.linearVerticaly,
            md: palette.navbarBackground,
          },
          my: 5,
          py: 5,
        }}
      >
        <Container maxwidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            justifyContent="space-between"
          >
            <Box sx={{ flex: 1, maxWidth: "600px" }}>
              <Typography
                component="h2"
                variant="h2"
                sx={{
                  color: { xs: palette.whiteText, md: palette.primary },
                  fontWeight: "bold",
                  fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "34px" },
                  whiteSpace: "nowrap",
                }}
              >
                Comment ??a fonctionne ?
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: palette.blackText,
                  opacity: { xs: 0.6, md: 1 },
                  fontSize: { xs: "14px", sm: "16px", md: "18px" },
                  mt: 5,
                  mb: { xs: 0, md: 5 },
                  "& div": { display: "flex", alignItems: "flex-start", pl: 1 },
                  "& div span": { pr: 1 },
                }}
              >
                Vous n???avez rien a payer et vous disposez d???un ensemble de
                fonctionnalit?? habituellement payante. Notre priorit?? est
                l???am??lioration de votre prise en charge m??dical gr??ce ?? notre
                concept unique tout en ??tant assit?? par un professionel.
                <div>
                  <span>1.</span> de vous connecter a votre compte{" "}
                </div>
                <div>
                  <span>2.</span> demander ou organiser une consultation avec un
                  m??decin
                </div>
                <div>
                  <span>3.</span> l???assistant se deplace chez vous ?? la
                  date/heure que vous aurez programm??
                </div>
                <div>
                  <span>4.</span> la consultation peut commencer{" "}
                </div>
              </Typography>
              <Box sx={{ mt: "60px", display: { xs: "none", md: "block" } }}>
                <MainButton text="T??l??charger l???application" />
                <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
                  <SocialButton direction="row" spacing={1}>
                    <img src={GooglePlay} alt="googleplay" />
                    <Box>
                      <Typography component="span" variant="span">
                        Disponible sur
                      </Typography>
                      <Typography component="p" variant="p">
                        Google Play
                      </Typography>
                    </Box>
                  </SocialButton>
                  <SocialButton direction="row" spacing={1}>
                    <img src={AppStore} alt="app store" />
                    <Box>
                      <Typography component="span" variant="span">
                        Disponible sur
                      </Typography>
                      <Typography component="p" variant="p">
                        App Store
                      </Typography>
                    </Box>
                  </SocialButton>
                </Stack>
              </Box>
            </Box>
            <Stack
              sx={{
                maxWidth: { xs: "initial", sm: "450px" },
                alignSelf: { xs: "center", md: "initial" },
              }}
            >
              <Lottie
                className="lottie"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                animationData={animationData}
                loop={true}
              />
              <Stack
                alignItems="center"
                sx={{ display: { xs: "flex", md: "none" }, mt: 3 }}
              >
                <MainButton
                  text="T??l??charger l???application"
                  sx={{
                    backgroundColor: palette.whiteText,
                    color: palette.primary,
                    width: "250px",
                  }}
                />
                <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
                  <SocialButton direction="row" spacing={1}>
                    <img src={GooglePlay} alt="googleplay" />
                    <Box>
                      <Typography component="span" variant="span">
                        Disponible sur
                      </Typography>
                      <Typography component="p" variant="p">
                        Google Play
                      </Typography>
                    </Box>
                  </SocialButton>
                  <SocialButton direction="row" spacing={1}>
                    <img src={AppStore} alt="app store" />
                    <Box>
                      <Typography component="span" variant="span">
                        Disponible sur
                      </Typography>
                      <Typography component="p" variant="p">
                        App Store
                      </Typography>
                    </Box>
                  </SocialButton>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: palette.navbarBackground, py: 5, mb: "50px" }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "24px", md: "34px" },
            textAlign: { xs: "left", md: "center" },
          }}
        >
          Fonctionnalit??s disponibles
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{
            color: palette.black,
            fontSize: { xs: "14px", sm: "16px", md: "18px" },
            mt: 2,
            mb: 4,
            textAlign: { xs: "left", md: "center" },
          }}
        >
          Vous n???avez rien a payer et vous disposez d???un ensemble de
          fonctionnalit?? habituellement payante. Notre priorit?? est
          l???am??lioration de votre prise en charge m??dical gr??ce ?? notre concept
          unique tout en ??tant assit?? par un professionel.
        </Typography>
        <Grid container spacing={3} sx={{ width: "100%", ml: 0 }}>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              <img src={PrioriteSvg1} alt="direct" />
              Messagerie
            </LeftGrid>
            <RightGrid item xs={7}>
              Si vous avez des questions, ??changez avec les m??decins et
              assistants qui vous ont ou qui vous prennent en charge.
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              <img src={PrioriteSvg2} alt="medicine" />
              Dossier m??dical
            </LeftGrid>
            <RightGrid item xs={7}>
              Accedez et g??rez la totalit?? des informations relatives a votre
              sant?? gr??ce a nos outils num??riques.
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              <img src={PrioriteSvg3} alt="date" />
              Prise de rendez vous
            </LeftGrid>
            <RightGrid item xs={7}>
              Besoin de programmer un rendez-vous ou bien besoin d???un
              rendez-vous urgent, acc??dez a votre agenda pour tout organiser.
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              <img src={PrioriteSvg4} alt="favourite" />
              Favoris
            </LeftGrid>
            <RightGrid item xs={7}>
              Choisissez l???assistant et le m??decin qui vous convient.
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              <img src={PrioriteSvg5} alt="location" />
              G??olocalisation
            </LeftGrid>
            <RightGrid item xs={7}>
              Suivez votre assitant avant qu???il n???arrive chez vous, ainsi vous
              savez exactement quand votre consultation d??butera.
            </RightGrid>
          </NestedGrid>
          <NestedGrid container item xs={12} md={6} spacing={3}>
            <LeftGrid item xs={5}>
              <img src={PrioriteSvg6} alt="history" />
              Historique
            </LeftGrid>
            <RightGrid item xs={7}>
              L???historique complet de votre suivi sur la plateforme est
              accessible a tout instant.
            </RightGrid>
          </NestedGrid>
        </Grid>
      </Container>
      <Container maxWidth="lg" sx={{ py: 5, mb: "50px" }}>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontWeight: "bold",
            fontSize: { xs: "18px", sm: "24px", md: "34px" },
            mb: 5,
          }}
        >
          Nos atouts
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <MyItem>
              <Typography component="h4" variant="h4">
                Confort
              </Typography>
              <Typography component="p" variant="p">
                Vous pouvez b??n??ficier d???une consultation dans l???environnement
                qui vous convient : chez vous, sur votre lieu de travail, dans
                votre r??sidence, ....O?? que vous soyez, nous venons ?? vous.
              </Typography>
            </MyItem>
          </Grid>
          <Grid item xs={12}>
            <MyItem>
              <Typography component="h4" variant="h4">
                Gratuit
              </Typography>
              <Typography component="p" variant="p">
                L???ensemble des fonctionnalit??s et des prestations sont gratuites
                si vous ??tes couvert par la caisse d'assurance maladie. Si ce
                n???est pas le cas, les frais sont les m??mes qu???en consultation
                chez votre m??decin traitant.
              </Typography>
            </MyItem>
          </Grid>
          <Grid item xs={12}>
            <MyItem>
              <Typography component="h4" variant="h4">
                S??curit??
              </Typography>
              <Typography component="p" variant="p">
                L???ensemble des fonctionnalit??s et des prestations sont gratuites
                si vous ??tes couvert par la caisse d'assurance maladie. Si ce
                n???est pas le cas, les frais sont les m??mes qu???en consultation
                chez votre m??decin traitant.
              </Typography>
            </MyItem>
          </Grid>
          <Grid item xs={12}>
            <MyItem>
              <Typography component="h4" variant="h4">
                24h/24 et 7j/7
              </Typography>
              <Typography component="p" variant="p">
                Que vous ayez une mobilit?? reduite ou que les circonstances vous
                emp??chent de sortir (enfants en bas ??ge, pas de transport, heure
                tr??s tardive...), il n???existe plus de barri??res pour b??n??ficier
                de soins dont vous avez besoins.
              </Typography>
            </MyItem>
          </Grid>
          <Grid item xs={12}>
            <MyItem>
              <Typography component="h4" variant="h4">
                Outil de pr??vention
              </Typography>
              <Typography component="p" variant="p">
                Gr??ce a?? certains dispositifs m??dicaux pr??sent dans notre
                E-cabinet, il est possible de pr??venir plut??t que de gu??rrir.
                Ainsi, il est possible de suivre votre ??tat d???hydratation,
                suivre votre masse grasse, votre masse maigre, votre ??tat
                nutritionnel... et donc d?????viter certains drames.
              </Typography>
            </MyItem>
          </Grid>
          <Grid item xs={12}>
            <MyItem>
              <Typography component="h4" variant="h4">
                Intimit?? respect??e
              </Typography>
              <Typography component="p" variant="p">
                Nos assistant(e)s sont soumis au secrets professionel et ne
                divulgeront aucune information en dehors du cadre professionel.
                De plus, notre outil de t??l??consultation peut permettre de
                floutter l???environnement dans lequel vous vous trouver si vous
                le souhaitez.
              </Typography>
            </MyItem>
          </Grid>
        </Grid>
      </Container>
      <CommonQuestions />
      <Footer />
    </>
  );
};

export default Priorite;

import React from "react";
import {
  Announcement,
  Faq,
  Footer,
  Navbar,
  HeroImageContainer,
} from "../../Components";
import HeroImg from "../../Assets/heroImg.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box } from "@mui/material";
import { MainButton, OutlineMainButton } from "../../Components/Common";
import palette from "../../Shared/palette";
import Video from "../../Assets/video.mp4";

const Teritories = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      {/* hero section */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Box>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: "50px",
                fontWeight: "900",
                lineHeight: "70px",
                color: palette.black,
                mb: 3,
              }}
            >
              Notre concept une <br />
              <Box
                sx={{
                  display: "inline-block",
                  position: "relative",
                  color: palette.primary,
                  mr: 2,
                }}
              >
                <img className="highLight" src={HighLight} alt="highlight" />
                solution
              </Box>
              pour les territoires
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ fontWeight: "300", mb: 3 }}
            >
              Du fait de la désertification médicale, les élus sont confrontés
              aux problèmes d’accessibibilité aux soins pour leurs administrés,
              en particulier pour les plus fragiles.
            </Typography>
            <Typography component="p" variant="p" sx={{ fontWeight: "300" }}>
              Notre concept grâce aux différentes solutions mobiles qu’il
              propose, permet de répondre aux besoins de santé que se soit en
              milieux urbains, semi-urbains et même ruraux.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: "50px" }}>
              <MainButton text="Démarrer maintenant" />
              <OutlineMainButton text="Contacter l’équipe commerciale" />
            </Stack>
          </Box>
          <HeroImageContainer main={HeroImg} background={HeroImageBackground} />
        </Stack>
      </Container>
      {/* end of hero section */}
      <Box sx={{ backgroundColor: palette.navbarBackground, py: "50px" }}>
        <Container maxWidth="lg" sx={{ pb: 5 }}>
          <Stack direction="row" alignItems="center" spacing={3}>
            <Box>
              <Typography
                component="h3"
                variant="h4"
                sx={{ color: palette.primary, fontWeight: 600 }}
              >
                Notre concept en vidéo
              </Typography>
              <Typography component="p" variant="p" sx={{ mt: 3, mb: "60px" }}>
                Notre concept et nos produits semblent répondre à vos besoins et
                vous intéresse. découvrez dès maintenant nos services et
                l’ensemble de nos prestations.
              </Typography>
              <MainButton text="Voir Offre & services" />
            </Box>
            <Box>
              <video
                controls
                autostart
                autoPlay
                muted
                src={Video}
                type="video/mp4"
                style={{ width: "600px", borderRadius: "7px" }}
              />
            </Box>
          </Stack>
        </Container>
        <Faq />
      </Box>
      <Footer />
    </>
  );
};

export default Teritories;

import React from "react";
import {
  Announcement,
  Footer,
  Navbar,
  HeroImageContainer,
} from "../../Components";
import SecondMedicineHeroImage from "../../Assets/SecondMedicine/SecondMedicineHeroImage.png";
import SecondMedicineImage1 from "../../Assets/SecondMedicine/SecondMedicineImage (1).png";
import SecondMedicineImage2 from "../../Assets/SecondMedicine/SecondMedicineImage (2).png";
import ApproachImage1 from "../../Assets/SecondMedicine/ApproachImage (1).png";
import ApproachImage2 from "../../Assets/SecondMedicine/ApproachImage (2).png";
import ApproachImage3 from "../../Assets/SecondMedicine/ApproachImage (3).png";
import VideoPreview from "../../Assets/SecondMedicine/VideoPreview.png";
import HeroImageBackground from "../../Assets/HeroImageBackground.png";
import HighLight from "../../Assets/HighLight.png";
import { Container, Stack, Typography, Box } from "@mui/material";
import palette from "../../Shared/palette";
import {
  MyImageContainer,
  Content,
  MyItem,
  ImageContainer,
  MyApproachItem,
} from "./Style";
import { Chip } from "../../Components/Common";

const ApproachArray = [
  {
    src: ApproachImage1,
    title: "Connect",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet facilisis porttitor turpis augue. Nunc congue dignissim",
  },
  {
    src: ApproachImage2,
    title: "Trust",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet facilisis porttitor turpis augue. Nunc congue dignissim",
  },
  {
    src: ApproachImage3,
    title: "Transparency",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet facilisis porttitor turpis augue. Nunc congue dignissim",
  },
];

const SecondMedicine = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 5, mb: "50px" }}>
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
              Qui sommes{" "}
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
                nous ?
              </Box>
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: palette.blackText, opacity: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum,
              pellentesque vitae venenatis, habitant nunc tortor. Maecenas
              vulputate at ut tellus sapien auctor at enim varius. Tellus
              faucibus adipiscing facilisis ornare vitae tincidunt risus, at
              accumsan. Orci, aliquet non imperdiet vel vitae non cras aliquam.
              Metus orci, pretium faucibus odio egestas odio eu scelerisque
              amet. Ornare turpis donec id mattis. Auctor nulla hendrerit
              fringilla facilisi etiam risus.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ my: 2, color: palette.blackText, opacity: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum,
              pellentesque vitae venenatis, habitant nunc tortor. Maecenas
              vulputate at ut tellus sapien auctor at enim varius.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: palette.blackText, opacity: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id ipsum,
              pellentesque vitae venenatis, habitant nunc tortor. Maecenas
              vulputate at ut tellus sapien auctor at enim varius{" "}
              <strong style={{ cursor: "pointer" }}>Read more...</strong>
            </Typography>
          </Box>
          <HeroImageContainer
            main={SecondMedicineHeroImage}
            background={HeroImageBackground}
          />
        </Stack>
      </Container>
      <Box
        sx={{ backgroundColor: palette.navbarBackground, py: 5, mb: "50px" }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" spacing={{ xs: 0, md: 5 }}>
            <MyImageContainer sx={{ display: { xs: "none", md: "block" } }}>
              <img src={VideoPreview} alt="video" />
            </MyImageContainer>
            <Content>
              <Typography component="h2" variant="h2">
                Mobility Started Out As A Platform And Became A Community
              </Typography>
              <Typography component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate ornare volutpat turpis ut nisi, quam dui duis. Urna
                nulla dolor consectetur pellentesque sapien risus nascetur
                faucibus fusce.
              </Typography>
              <Typography component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate ornare volutpat turpis ut nisi, quam dui duis. Urna
                nulla dolor consectetur pellentesque sapien ascetur faucibus
                fusce.
              </Typography>
              <MyImageContainer sx={{ display: { xs: "block", md: "none" } }}>
                <img src={VideoPreview} alt="video" />
              </MyImageContainer>
              <Typography component="h2" variant="h2">
                Our Mission & Visions
              </Typography>
              <Typography component="p" variant="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate ornare volutpat turpis ut nisi, quam dui duis. Urna
                nulla dolor consectetur pellentesque sapien ascetur faucibus
                fusce.
              </Typography>
            </Content>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="lg" sx={{ py: 5, mb: "50px" }}>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          alignItems="center"
          spacing={3}
        >
          <HeroImageContainer
            sx={{
              marginRight: "0 !important",
              marginLeft: { xs: "10px !important", md: "0" },
              "& img:nth-child(2)": {
                transform: {
                  xs: "translate(-10px, 20px)",
                  md: "translate(-20px, 20px)",
                },
              },
            }}
            main={SecondMedicineImage1}
            background={HeroImageBackground}
          />
          <Box sx={{ textAlign: { xs: "left", md: "right" } }}>
            <Chip text="Our Achievement" />
            <Typography
              component="h3"
              variant="h3"
              sx={{
                fontSize: { xs: "21px", sm: "24px", md: "28px", lg: "38px" },
                fontWeight: "bold",
                color: palette.primary,
                mb: 3,
              }}
            >
              The Best Service for our customers
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: palette.blackText, opacity: 0.8 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              ornare volutpat turpis ut nisi, quam dui duis. Urna nulla dolor
              consectetur pellentesque sapien risus nascetur faucibus fusce.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate
              ornare volutpat turpis ut nisi, quam dui duis. Urna nulla dolor
              consectetur pellentesque sapien risus nascetur faucibus fusce.
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
              sx={{ mt: 5 }}
            >
              <MyItem>
                <span>15+</span>
                <p>
                  Years <br /> Experiences
                </p>
              </MyItem>
              <MyItem className="active">
                <span>12K+</span>
                <p>
                  Happy <br /> Clients
                </p>
              </MyItem>
              <MyItem>
                <span>250+</span>
                <p>
                  Successfully <br /> Complete{" "}
                </p>
              </MyItem>
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Container maxWidth="lg" sx={{ py: 5, mb: "50px" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={3}
        >
          <Box>
            <Chip text="Specialist" />
            <Typography
              component="h3"
              variant="h3"
              sx={{
                fontSize: { xs: "21px", sm: "24px", md: "28px", lg: "38px" },
                fontWeight: "bold",
                color: palette.primary,
                mb: 3,
              }}
            >
              Mobility became something that will change the home care industry
              forever
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: palette.blackText, opacity: 0.8 }}
            >
              We had an idea and we knew we could create something that would
              make a big impact for those who need it most.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: palette.blackText, opacity: 0.8, my: 2 }}
            >
              Mobility became massive in its vision. It got bigger and bigger as
              we sought to create something that would transform people’s lives,
              allowing ease and safety, choice and control.
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ color: palette.blackText, opacity: 0.8 }}
            >
              And, we’re only just getting started … our plans for the coming
              years continue to use technology to improve people’s lives.
            </Typography>
          </Box>
          <HeroImageContainer
            sx={{
              "& img:nth-child(2)": {
                transform: "translate(10px, 50px) scaleX(-1)",
              },
            }}
            main={SecondMedicineImage2}
            background={HeroImageBackground}
          />
        </Stack>
      </Container>
      <Container maxWidth="lg" sx={{ py: 5, mb: "50px" }}>
        <Typography
          component="h3"
          variant="h3"
          sx={{
            fontSize: { xs: "21px", sm: "24px", md: "28px", lg: "38px" },
            fontWeight: "bold",
            color: palette.primary,
            mb: 2,
            textAlign: "center",
          }}
        >
          Our approach to mobilitycare
        </Typography>
        <Typography
          component="p"
          variant="p"
          sx={{ color: palette.blackText, opacity: 0.8, textAlign: "center" }}
        >
          Providing high-quality, trusted, and accessible healthcare is our
          reason for being
        </Typography>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={5}
          sx={{ mt: 5 }}
        >
          {ApproachArray?.map((item, index) => (
            <MyApproachItem key={index}>
              <ImageContainer>
                <img src={item.src} alt={item.title} />
              </ImageContainer>
              <Typography
                component="h5"
                variant="h5"
                sx={{
                  fontSize: { xs: "24px", md: "28px", lg: "34px" },
                  fontWeight: "bold",
                  color: palette.whiteText,
                  my: 2,
                }}
              >
                {item.title}
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{
                  fontSize: { xs: "14", md: "18" },
                  color: palette.whiteText,
                }}
              >
                {item.desc}
              </Typography>
            </MyApproachItem>
          ))}
        </Stack>
      </Container>
      <Footer />
    </>
  );
};

export default SecondMedicine;

import React from "react";
import { Announcement, Navbar, Footer } from "../../Components";
import { Container, Typography, Stack } from "@mui/material";
import { HeroContainer, Title, Desc, Bullet } from "./Style";
import palette from "../../Shared/palette";

const securityInformationArray = [
  "Cookies – When you login to Mobilitycare, we send one or more cookies to your computer or other device. We use cookies to improve the quality of our service, including for storing user preferences, improving user experience.",
  "Log information – When you access Mobilitycare via a browser, application or other client our servers automatically record certain information. These server logs may include information such as your web request, your interaction with a service, Internet Protocol address, browser type, browser language, the date and time of your request and one or more cookies that may uniquely identify your browser or your account.",
  "User communications – When you send email or other communications to Mobilitycare, we may retain those communications in order to process your inquiries, respond to your requests and improve our services. When you send and receive SMS messages to or from one of our services that provides SMS functionality, we may collect and maintain information associated with those messages, such as the phone number, the wireless carrier associated with the phone number, the content of the message, and the date and time of the transaction. We may use your email address to communicate with you about our services.",
  " In addition to the above, we may use the information we collect to: Provide, maintain, protect, and improve our services (including advertising services) and develop new services; and Protect the rights or property of Mobilitycare or our users.If we use this information in a manner different than the purpose for which it was collected, then we will ask for your consent prior to such use.",
];

const coockieArray = [
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  "Lorem Ipsum is simply dummy text.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry, Lorem Ipsum is simply dummy text.",
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
];

const PrivacyPolicy = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <HeroContainer>
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: { xs: "26px", sm: "38px", md: "48px", lg: "60px" },
              fontWeight: "900",
              lineHeight: { xs: "50px", lg: "70px" },
              color: palette.whiteText,
              mb: 3,
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              color: palette.whiteText,
              fontSize: { xs: "18px", sm: "21px", md: "24px", lg: "28px" },
              maxWidth: { xs: "initial", md: "350px" },
            }}
          >
            Information we collect and how we use it
          </Typography>
        </Container>
      </HeroContainer>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Title>Security Information</Title>
        {securityInformationArray?.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={1}
            sx={{ mb: { xs: 2, md: 3 } }}
          >
            <Desc>{index + 1}.</Desc>
            <Desc>{item}</Desc>
          </Stack>
        ))}
        <Title>Sharing Information</Title>
        <Desc>
          MobilityCare, SAS. Tous droits réservés will not share personal
          information and your patient data with other companies or individuals
          outside of MobilityCare, SAS. Tous droits réservés
        </Desc>
        <Title>Security Information</Title>
        <Desc>
          We take appropriate security measures to protect against unauthorized
          access to or unauthorized alteration, disclosure or destruction of
          data. These include internal reviews of our data collection, storage
          and processing practices and security measures, including the choice
          of our infrastructure providers.
        </Desc>
        <Desc>
          We restrict access to personal information to MobilityCare employees,
          contractors and agents who need to know that information in order to
          process it on our behalf. These individuals are bound by
          confidentiality obligations and may be subject to discipline,
          including termination and criminal prosecution, if they fail to meet
          these obligations.
        </Desc>
        <Title>Updating personal information and accessing</Title>
        <Desc>
          When you use MobilityCare services, we make good faith efforts to
          provide you with access to your personal information and either to
          correct this data if it is inaccurate or to delete such data at your
          request if it is not otherwise required to be retained by law or for
          legitimate business purposes. We ask individual users to identify
          themselves and the information requested to be accessed, corrected or
          removed before processing such requests, and we may decline to process
          requests that are unreasonably repetitive or systematic, require
          disproportionate technical effort, jeopardize the privacy of others,
          or would be extremely impractical (for instance, requests concerning
          information residing on backup tapes), or for which access is not
          otherwise required. In any case where we provide information access
          and correction, we perform this service free of charge, except if
          doing so would require a disproportionate effort. Because of the way
          we maintain certain services, after you delete your information,
          residual copies may take a period of time before they are deleted from
          our active servers and may remain in our backup systems. Please review
          the service Help Centers for more information.
        </Desc>
        <Title>Changes to this Privacy Policy</Title>
        <Desc>
          Please note that this Privacy Policy may change from time to time. We
          will not reduce your rights under this Privacy Policy without your
          explicit consent. We will post any Privacy Policy changes on this page
          and, if the changes are significant, we will provide a more prominent
          notice (including, for certain services, email notification of Privacy
          Policy changes). We will also keep prior versions of this Privacy
          Policy in an archive for your review.
        </Desc>
        <Title>We use cookies to:</Title>
        {coockieArray?.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            spacing={1}
            sx={{ mb: { xs: 2, md: 3 } }}
          >
            <Bullet />
            <Desc>{item}</Desc>
          </Stack>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

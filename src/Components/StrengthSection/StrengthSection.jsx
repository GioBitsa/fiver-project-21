import React from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import palette from "../../Shared/palette";
import SolutionStrengthImage1 from "../../Assets/Solution/SolutionStrengthImage (1).png";
import SolutionStrengthImage2 from "../../Assets/Solution/SolutionStrengthImage (2).png";
import { MdDone } from "react-icons/md";

const strengthArray = [
  {
    src: SolutionStrengthImage1,
    header: "In-Person Visit",
    desc: "Nam at lectus urna duis convallis convallis tellus. Cursus sit amet dictum sit amet justo donec enim diam",
    list: [
      "Rhoncus mattis rhoncus urna",
      "Suspendisse nec ultricies elit, ac accumsan neque Suspendisse nec ultricies elit, ac accumsan neque",
      "Rhoncus mattis rhoncus urna",
      "Sed fermentum finibus commodo",
    ],
  },
  {
    src: SolutionStrengthImage2,
    header: "Telehealth: By Videocall or Phonecall",
    desc: "Nam at lectus urna duis convallis convallis tellus. Cursus sit amem",
    list: [
      "Rhoncus mattis rhoncus urna",
      "Suspendisse nec ultricies elit, ac accumsan neque Suspendisse nec ultricies elit, ac accumsan neque",
      "Rhoncus mattis rhoncus urna",
      "Sed fermentum finibus commodo",
    ],
  },
];

const StrengthSection = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5, mb: "50px" }}>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: palette.primary,
          fontWeight: "bold",
          fontSize: { xs: "18px", sm: "24px", md: "34px" },
        }}
      >
        Nos atouts
      </Typography>
      <Typography
        component="p"
        variant="p"
        sx={{
          color: palette.black,
          fontSize: { xs: "14px", sm: "16px", md: "18px" },
          opacity: 0.8,
          mt: 2,
          mb: 4,
          maxWidth: "900px",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam curabitur
        tristique egestas enim. Fringilla elit erat vulputate pellentesque nunc,
        sed nunc ut.
      </Typography>
      {strengthArray?.map((item, index) => (
        <Stack
          key={index}
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={3}
          sx={{ my: 5 }}
        >
          <Box sx={{ flex: 1 }}>
            <img style={{ width: "100%" }} src={item.src} alt={item.header} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              component="h3"
              variant="h3"
              sx={{
                color: palette.primary,
                fontWeight: "bold",
                fontSize: { xs: "18px", sm: "24px", md: "28px" },
              }}
            >
              {item.header}
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                color: palette.blackText,
                opacity: 0.8,
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              {item.desc}
            </Typography>
            <Box sx={{ mt: 3 }}>
              {item.list?.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="flex-start"
                  sx={{ my: 2 }}
                >
                  <MdDone
                    style={{
                      minWidth: "20px",
                      height: "20px",
                      marginRight: "10px",
                      color: "green",
                    }}
                  />
                  <Typography
                    component="p"
                    variant="p"
                    sx={{
                      color: palette.blackText,
                      opacity: 0.6,
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Box>
        </Stack>
      ))}
    </Container>
  );
};

export default StrengthSection;

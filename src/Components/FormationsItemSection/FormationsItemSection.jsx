import React from "react";
import {
  Container,
  Stack,
  Box,
  Typography,
  Divider,
  Grid,
} from "@mui/material";
import { SpanContainer, MyImageContainer } from "./Style";
import palette from "../../Shared/palette";
import { MainButton } from "../Common";

const FormationsItemSection = ({
  align,
  index,
  title,
  desc,
  subTitle,
  content,
  details,
  strong,
  strongMobile,
  buttonText,
  dividerText,
  mainImage,
}) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: "70px" }}>
      <Stack
        direction={{
          xs: "column-reverse",
          md: align === "left" ? "row" : "row-reverse",
        }}
        spacing={{ xs: 3, md: 5 }}
      >
        <Box
          sx={{
            flex: 2,
            maxWidth: { xs: "initial", md: "600px" },
            textAlign: { xs: "left", md: align === "left" ? "left" : "right" },
          }}
        >
          <SpanContainer
            sx={{ ml: { xs: 0, md: align === "left" ? "0" : "auto" } }}
          >
            <span>{index}</span>
          </SpanContainer>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: palette.primary,
              fontWeight: "bold",
              fontSize: { xs: "18px", sm: "21px", md: "28px" },
              textDecoration: "underline",
              mt: { xs: 3, md: 5 },
              mb: { xs: 2, md: 3 },
            }}
          >
            {title}
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              color: palette.black,
              fontSize: { xs: "14px", sm: "16px" },
            }}
          >
            {desc}
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              color: palette.black,
              fontWeight: "600",
              fontSize: "18px",
              my: 2,
            }}
          >
            {subTitle}
          </Typography>
          {content?.map((item, index) => (
            <Stack
              key={index}
              direction="row"
              alignItems="flex-start"
              justifyContent={{
                xs: "flex-start",
                md: align === "left" ? "flex-start" : "flex-end",
              }}
              spacing={{ xs: 0, sm: 1 }}
            >
              <Typography
                component="p"
                variant="p"
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: palette.black,
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                {index + 1}.
              </Typography>
              <Typography
                component="p"
                variant="p"
                sx={{
                  color: palette.black,
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                {item}
              </Typography>
            </Stack>
          ))}
          <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
            {details?.map((item, index) => (
              <Grid key={index} item xs={12} md={6}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent={{
                    xs: "flex-start",
                    md: align === "left" ? "flex-start" : "flex-end",
                  }}
                  spacing={2}
                >
                  <img src={item.src} alt={item.text} />
                  <Typography
                    component="p"
                    variant="p"
                    sx={{ color: palette.blackText, opacity: 0.8 }}
                  >
                    {item.text}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              display: { xs: "none", md: "block" },
              color: palette.primary,
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {strong}
          </Typography>
          <Typography
            component="h6"
            variant="h6"
            sx={{
              display: { xs: "block", md: "none" },
              color: palette.primary,
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            {strongMobile}
          </Typography>
          <MainButton
            text={buttonText}
            sx={{
              display: "block",
              width: { xs: "100%", sm: "initial" },
              ml: { xs: "0", md: align === "left" ? "0" : "auto" },
              mr: { xs: "auto", sm: "initial" },
              mt: 3,
            }}
          />
        </Box>
        <MyImageContainer sx={{ flex: 1 }}>
          <img src={mainImage} alt="main" />
        </MyImageContainer>
      </Stack>
      <Typography
        sx={{
          mt: 3,
          display: { xs: "none", md: "block" },
          color: palette.blackText,
        }}
      >
        {dividerText}
      </Typography>
      <Divider
        sx={{
          display: { xs: "none", md: "block" },
          borderColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
    </Container>
  );
};

export default FormationsItemSection;

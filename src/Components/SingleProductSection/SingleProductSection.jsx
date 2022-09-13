import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import palette from "../../Shared/palette";
import { MainButton } from "../Common";
import {
  MainImage,
  LeftBackgroundImage,
  RightBackgroundImage,
  ImageStack,
} from "./Style";

const SingleProductSection = ({
  align,
  mainImage,
  mainTitle,
  imageStack,
  contentTitle,
  children,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: palette.navbarBackground,
        py: 5,
        mb: { xs: "100px", md: "150px" },
        overflow: { xs: "hidden", sm: "initial" },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{
            xs: "column",
            md: align === "left" ? "row-reverse" : "row",
          }}
          spacing={3}
          justifyContent="space-between"
        >
          <Box
            sx={{
              flex: 1,
              position: "relative",
              minHeight: { xs: "600px", md: "initial" },
            }}
          >
            <Typography
              component="h2"
              variant="h2"
              sx={{
                color: palette.lightPrimary,
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "24px", md: "28px", lg: "34px" },
                whiteSpace: "nowrap",
                textAlign: {
                  xs: "right",
                  md: align === "left" ? "right" : "left",
                },
              }}
            >
              {mainTitle}
            </Typography>
            <MainImage src={mainImage} alt="main" />
            <ImageStack
              direction="row"
              spacing={3}
              justifyContent={{
                xs: "center",
                sm: "flex-start",
                md: align === "left" ? "flex-end" : "flex-start",
              }}
            >
              {imageStack.map((item, index) => (
                <img src={item} key={index} alt={index} />
              ))}
            </ImageStack>
            {align === "left" ? (
              <RightBackgroundImage />
            ) : (
              <LeftBackgroundImage />
            )}
          </Box>
          <Box
            sx={{
              maxWidth: "700px",
              textAlign: { xs: "left", md: align },
              position: "relative",
            }}
          >
            <Typography
              component="h3"
              variant="h3"
              sx={{
                color: palette.lightPrimary,
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {contentTitle}
            </Typography>
            {children}
            <MainButton
              text="Découvrir nos offres et services"
              sx={{
                display: { xs: "block", sm: "initial" },
                margin: { xs: "0 auto", sm: "initial" },
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SingleProductSection;

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { MyItem, MyStack } from "./Style";
import palette from "../../Shared/palette";
import { OutlineMainButton } from "../Common";

const StartingSteps = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          color: palette.primary,
          fontWeight: "bold",
          fontSize: { xs: "21px", sm: "34px", md: "38px", lg: "44px" },
          mb: "50px",
        }}
        align="center"
      >
        3 étapes pour démarer avec <br />
        Mobility Care
      </Typography>
      <Grid container>
        <Grid item xs={12} md={4}>
          <MyItem>
            <MyStack>
              <span>1</span>
              <Box>
                <Typography component="h6" variant="h6">
                  S’inscrire
                </Typography>
                <Typography component="p" variant="p">
                  Inscription et utilisation gratuite.
                </Typography>
              </Box>
            </MyStack>
            <OutlineMainButton text="S’inscrire" />
          </MyItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <MyItem>
            <MyStack>
              <span>2</span>
              <Box>
                <Typography component="h6" variant="h6">
                  Se former
                </Typography>
                <Typography component="p" variant="p">
                  Accedez aux formations en ligne pour une prise en main
                  facilité.
                </Typography>
              </Box>
            </MyStack>
            <OutlineMainButton text="Suivre les formations" />
          </MyItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <MyItem>
            <MyStack>
              <span>3</span>
              <Box>
                <Typography component="h6" variant="h6">
                  Commencer
                </Typography>
                <Typography component="p" variant="p">
                  Vous avez toutes les cartes en mains pour réaliser des
                  téléconsultations
                </Typography>
              </Box>
            </MyStack>
            <OutlineMainButton text="Se connecter" />
          </MyItem>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StartingSteps;

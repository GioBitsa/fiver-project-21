import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { MyItem, IconContainer, Content } from "./Style";
import palette from "../../Shared/palette";

const ServicesComponent = ({ content }) => {
  return (
    <Box sx={{ backgroundColor: palette.navbarBackground, py: "70px" }}>
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            mb: 5,
          }}
        >
          Services
        </Typography>
        <Grid container spacing={3}>
          {content.map((item, index) => (
            <Grid key={index} item xs={12} md={4}>
              <MyItem>
                <IconContainer>
                  <img src={item.image} alt="accompagnement" />
                </IconContainer>
                <Content>
                  <h6>{item.title}</h6>
                  <p>{item.desc}</p>
                </Content>
              </MyItem>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesComponent;

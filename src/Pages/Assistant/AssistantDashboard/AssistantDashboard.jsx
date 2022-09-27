import React, { useState } from "react";
import { Grid, Typography, Stack, Box, Divider } from "@mui/material";
import { PageLayout, AssistantProfileDetails } from "../../../Components";
import User2 from "../../../Assets/User (2).png";
import { AssistantSideBarRoutes } from "../../../Shared/routes";
import { Item, DatesContainer } from "./Style";
import palette from "../../../Shared/palette";
import Map from "../../../Assets/Map.png";
import { MyCalendar } from "../../../Components/Common";

const generalInformationsArray = [
  {
    category: "Email:",
    content: "annalds11@gmail.com",
  },
  {
    category: "Designation:",
    content: "Medical Assistant",
  },
  {
    category: "Age:",
    content: "33 Years",
  },
];

const datesArray = [
  {
    time: "09:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "10:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "11:00",
    text: "No consultation",
  },
  {
    time: "12:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "13:00",
    text: "Mr Guillaume Gora",
  },
];

const AssistantDashboard = () => {
  const [active, setActive] = useState();

  return (
    <PageLayout
      profile={{ img: User2, name: "Anna L D", desc: "Bienvenue" }}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      <AssistantProfileDetails />
      <Grid container spacing={3}>
        <Grid item xs={12} md={7}>
          <Item>
            <Typography component="h3" variant="h3">
              Informations générales
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: 2, flexWrap: "wrap" }}
            >
              {generalInformationsArray?.map((item, index) => (
                <Typography
                  key={index}
                  component="h6"
                  variant="h6"
                  sx={{
                    color: palette.blackText,
                    opacity: 0.8,
                    fontSize: { xs: "12px", sm: "14px", lg: "16px" },
                    mt: 1,
                    pr: 2,
                  }}
                >
                  <strong>{item.category}</strong>
                  <br />
                  {item.content}
                </Typography>
              ))}
            </Stack>
          </Item>
          <Item sx={{ display: { xs: "none", md: "block" } }}>
            <Typography component="h3" variant="h3">
              Demande d’une consultation non programmée
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <Box sx={{ flex: 3 }}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={Map}
                  alt="map"
                />
              </Box>
              <Box sx={{ flex: 2 }}>cards here</Box>
            </Stack>
          </Item>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <MyCalendar sx={{ border: "none", padding: 0, margin: "0 auto" }} />
            <Typography component="h3" variant="h3">
              Visites du jour :
            </Typography>
            <Divider sx={{ my: 2, display: { xs: "block", md: "none" } }} />
            {datesArray?.map((item, index) => (
              <DatesContainer
                key={index}
                direction="row"
                spacing={2}
                alignItems="center"
                onClick={() => setActive(index)}
                className={active === index ? "active" : ""}
              >
                <Typography component="p" variant="p">
                  {item.time}
                </Typography>
                <Typography component="p" variant="p">
                  {item.text}
                </Typography>
                <Typography component="p" variant="p">
                  view details
                </Typography>
              </DatesContainer>
            ))}
          </Item>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default AssistantDashboard;

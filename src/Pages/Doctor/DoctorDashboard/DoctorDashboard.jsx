import React from "react";
import { Divider, Grid, Typography, Stack } from "@mui/material";
import { PageLayout } from "../../../Components";
import { DoctorSideBarRoutes } from "../../../Shared/routes";
import { DatesSchedule, MyCalendar } from "../../../Components/Common";
import { Item, ProfileDetailsContainer, StackItem } from "./Style";
import UserDoctor from "../../../Assets/UserDoctor.png";
import Badge from "../../../Assets/Badge.svg";
import Activities1 from "../../../Assets/Icons/Activities (1).png";
import Activities2 from "../../../Assets/Icons/Activities (2).png";
import Activities3 from "../../../Assets/Icons/Activities (3).png";

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
  {
    time: "14:00",
    text: "Mr Guillaume Gora",
  },
  {
    time: "15:00",
    text: "No consultation",
  },
  {
    time: "16:00",
    text: "No consultation",
  },
  {
    time: "17:00",
    text: "Mr Guillaume Gora",
  },
];

const DoctorDashboard = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={DoctorSideBarRoutes}
      profileType="doctor"
    >
      <Grid container spacing={3}>
        <Grid container spacing={3} item xs={12} md={7}>
          <Grid item xs={12} md={6}>
            <ProfileDetailsContainer>
              <img src={UserDoctor} alt="user" />
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
              >
                <Typography component="h4" variant="h4">
                  Karine Copper
                </Typography>
                <img className="badge" src={Badge} alt="verfied" />
              </Stack>
              <Typography component="h5" variant="h5">
                Medical Assistant
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{ flexWrap: "wrap" }}
              >
                <StackItem>
                  <img src={Activities1} alt="activitie" />
                  <p>Note globale</p>
                  <span>4.7</span>
                </StackItem>
                <StackItem>
                  <img src={Activities2} alt="activitie" />
                  <p>Nombre de visite</p>
                  <span>438</span>
                </StackItem>
                <StackItem>
                  <img src={Activities3} alt="activitie" />
                  <p>Messages</p>
                  <span>233</span>
                </StackItem>
              </Stack>
            </ProfileDetailsContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            asd
          </Grid>
        </Grid>
        <Grid item xs={12} md={5}>
          <Item>
            <MyCalendar sx={{ border: "none", padding: 0, margin: "0 auto" }} />
            <Typography component="h3" variant="h3">
              Visites du jour :
            </Typography>
            <Divider sx={{ my: 2, display: { xs: "block", md: "none" } }} />
            <DatesSchedule datesArray={datesArray} />
          </Item>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default DoctorDashboard;

import React from "react";
import { Grid } from "@mui/material";
import {
  NewestDocuments,
  PageLayout,
  ProfileDetails,
  NewMessages,
  PatientDashboardTable,
} from "../../Components";
import Home from "../../Assets/Icons/Home.png";
import ListDisabled from "../../Assets/Icons/ListDisabled.png";
import HeartDisabled from "../../Assets/Icons/HeartDisabled.png";
import TickDisabled from "../../Assets/Icons/TickDisabled.png";
import CalendarDisabled from "../../Assets/Icons/CalendarDisabled.png";
import ChatDisabled from "../../Assets/Icons/ChatDisabled.png";
import User from "../../Assets/User.png";

const PatientDashboard = () => {
  return (
    <PageLayout
      profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
      sideBarItems={[
        {
          icon: Home,
          disabledIcon: null,
          text: "Tableau de bord",
          active: true,
        },
        {
          icon: null,
          disabledIcon: ListDisabled,
          text: "Dossier Médical",
          active: false,
        },
        {
          icon: null,
          disabledIcon: HeartDisabled,
          text: "Mes Favoris",
          active: false,
        },
        {
          icon: null,
          disabledIcon: TickDisabled,
          text: "Historique",
          active: false,
        },
        {
          icon: null,
          disabledIcon: CalendarDisabled,
          text: "Calendrier consultations programmé",
          active: false,
        },
        {
          icon: null,
          disabledIcon: ChatDisabled,
          text: "Demande d’une consultation non programmée",
          active: false,
        },
      ]}
      profileType="patient"
    >
      <ProfileDetails />
      <PatientDashboardTable />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <NewMessages />
        </Grid>
        <Grid item xs={12} md={6}>
          <NewestDocuments />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default PatientDashboard;

import React from "react";
import { PageLayout, HistoryTable } from "../../../Components";
import Tick from "../../../Assets/Icons/Tick.png";
import HomeDisabled from "../../../Assets/Icons/HomeDisabled.png";
import ListDisabled from "../../../Assets/Icons/ListDisabled.png";
import HeartDisabled from "../../../Assets/Icons/HeartDisabled.png";
import CalendarDisabled from "../../../Assets/Icons/CalendarDisabled.png";
import ChatDisabled from "../../../Assets/Icons/ChatDisabled.png";
import User from "../../../Assets/User.png";

const PatientHistory = () => {
  return (
    <PageLayout
      profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
      sideBarItems={[
        {
          icon: null,
          disabledIcon: HomeDisabled,
          text: "Tableau de bord",
          active: false,
          pathName: "/patient/dashboard",
        },
        {
          icon: null,
          disabledIcon: ListDisabled,
          text: "Dossier Médical",
          active: false,
          pathName: "/patient",
        },
        {
          icon: null,
          disabledIcon: HeartDisabled,
          text: "Mes Favoris",
          active: false,
          pathName: "/patient",
        },
        {
          icon: Tick,
          disabledIcon: null,
          text: "Historique",
          active: true,
          pathName: "/patient/history",
        },
        {
          icon: null,
          disabledIcon: CalendarDisabled,
          text: "Calendrier consultations programmé",
          active: false,
          pathName: "/patient",
        },
        {
          icon: null,
          disabledIcon: ChatDisabled,
          text: "Demande d’une consultation non programmée",
          active: false,
          pathName: "/patient",
        },
      ]}
      profileType="patient"
    >
      <HistoryTable />
    </PageLayout>
  );
};

export default PatientHistory;

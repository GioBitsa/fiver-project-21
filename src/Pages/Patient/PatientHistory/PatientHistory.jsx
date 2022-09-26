import React from "react";
import { PageLayout, HistoryTable } from "../../../Components";
import User from "../../../Assets/User.png";
import { PatientSideBarRoutes } from "../../../Shared/routes";

const PatientHistory = () => {
  return (
    <PageLayout
      profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
      sideBarItems={PatientSideBarRoutes}
      profileType="patient"
    >
      <HistoryTable type="history" title="Mes consultations réalisées" />
      Table should be here
    </PageLayout>
  );
};

export default PatientHistory;

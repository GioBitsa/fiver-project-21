import React from "react";
import { PageLayout, HistoryTable } from "../../../Components";
import User from "../../../Assets/User.png";
import { PatientSideBarRoutes } from "../../../Shared/routes";

const PatientMedicalFiles = () => {
  return (
    <PageLayout
      profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
      sideBarItems={PatientSideBarRoutes}
      profileType="patient"
    >
      <HistoryTable />
      Table should be here
    </PageLayout>
  );
};

export default PatientMedicalFiles;

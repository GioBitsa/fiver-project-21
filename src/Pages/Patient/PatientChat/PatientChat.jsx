import React from "react";
import { PageLayout } from "../../../Components";
import User from "../../../Assets/User.png";
import { PatientSideBarRoutes } from "../../../Shared/routes";

const PatientChat = () => {
  return (
    <PageLayout
      profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
      sideBarItems={PatientSideBarRoutes}
      profileType="patient"
    >
      content
    </PageLayout>
  );
};

export default PatientChat;

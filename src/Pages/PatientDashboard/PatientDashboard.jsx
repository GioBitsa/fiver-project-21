import React from "react";
import { PageLayout } from "../../Components";
import Home from "../../Assets/Icons/Home.png";
import User from "../../Assets/User.png";

const PatientDashboard = () => {
  return (
    <>
      <PageLayout
        profile={{ img: User, name: "Lydia Meli", desc: "Bienvenue" }}
        sideBarItems={[
          {
            icon: Home,
            disabledIcon: "",
            text: "Tableau de bord",
            active: true,
          },
          {
            icon: Home,
            disabledIcon: "",
            text: "Dossier Médical",
            active: false,
          },
        ]}
      >
        asd
      </PageLayout>
    </>
  );
};

export default PatientDashboard;

import React from "react";
import { PageLayout, HistoryTable } from "../../../Components";
import { DoctorSideBarRoutes } from "../../../Shared/routes";

const PatientsList = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={DoctorSideBarRoutes}
      profileType="doctor"
    >
      <HistoryTable title="Liste des patients" />
      Table should be here
    </PageLayout>
  );
};

export default PatientsList;

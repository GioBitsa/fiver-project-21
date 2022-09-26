import React from "react";
import { PageLayout } from "../../../Components";
import { DoctorSideBarRoutes } from "../../../Shared/routes";

const DoctorMessage = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={DoctorSideBarRoutes}
      profileType="doctor"
    >
      Doctor Messages here
    </PageLayout>
  );
};

export default DoctorMessage;

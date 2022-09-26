import React from "react";
import { PageLayout } from "../../../Components";
import { AssistantSideBarRoutes } from "../../../Shared/routes";

const AssistantCalendar = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      Assistant Calendar Here
    </PageLayout>
  );
};

export default AssistantCalendar;

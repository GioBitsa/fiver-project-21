import React from "react";
import { PageLayout, HistoryTable } from "../../../Components";
import { AssistantSideBarRoutes } from "../../../Shared/routes";

const AssistantPatientList = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      <HistoryTable title="Liste des patients" />
      Table should be here
    </PageLayout>
  );
};

export default AssistantPatientList;

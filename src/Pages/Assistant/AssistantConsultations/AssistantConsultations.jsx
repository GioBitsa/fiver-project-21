import React from "react";
import { PageLayout, HistoryTable } from "../../../Components";
import { AssistantSideBarRoutes } from "../../../Shared/routes";

const AssistantConsultations = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      <HistoryTable title="Mes consultations réalisées" />
      Table should be here
    </PageLayout>
  );
};

export default AssistantConsultations;

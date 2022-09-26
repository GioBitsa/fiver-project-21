import React from "react";
import { PageLayout } from "../../../Components";
import { AssistantSideBarRoutes } from "../../../Shared/routes";

const AssistantMessage = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      Assistant Messages Here
    </PageLayout>
  );
};

export default AssistantMessage;

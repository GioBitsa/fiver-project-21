import React from "react";
import { PageLayout } from "../../../Components";
import { AssistantSideBarRoutes } from "../../../Shared/routes";

const AssistantChat = () => {
  return (
    <PageLayout
      profile={null}
      sideBarItems={AssistantSideBarRoutes}
      profileType="assistant"
    >
      content
    </PageLayout>
  );
};

export default AssistantChat;

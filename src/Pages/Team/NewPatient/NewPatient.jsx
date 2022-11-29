import React, { useState } from "react";
import { PageLayout } from "../../../Components";
import { TeamSideBarRoutes } from "../../../Shared/routes";
import { Stack, Typography, Box } from "@mui/material";
import palette from "../../../Shared/palette";
import { MyButton } from "./Style";
import ManualAdding from "./ManualAdding/ManualAdding";
import AutoAdding from "./AutoAdding/AutoAdding";

const NewPatient = () => {
  const [active, setActive] = useState(1);

  return (
    <PageLayout
      profile={null}
      sideBarItems={TeamSideBarRoutes}
      profileType="team"
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        spacing={3}
        sx={{ mt: 2, mb: 4 }}
      >
        <Box>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: palette.primary,
              fontSize: { xs: "18px", sm: "21px", md: "24px" },
              fontWeight: "600",
            }}
          >
            Nouveau patient : Ordonnance de soins
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              color: palette.blackText,
              fontSize: { xs: "14px", md: "16px" },
              opacity: 0.6,
            }}
          >
            Veuillez paramétrer les informations nécessaires a cette nouvelle
            prise en charge :
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center">
          <MyButton
            text="Saisie Assistée"
            className={active === 1 ? "active" : ""}
            onClick={() => setActive(1)}
            sx={{ borderRadius: "5px 0 0 5px" }}
          />
          <MyButton
            text="Saisie manuelle"
            className={active === 2 ? "active" : ""}
            onClick={() => setActive(2)}
            sx={{ borderRadius: "0 5px 5px 0" }}
          />
        </Stack>
      </Stack>
      {active === 1 ? <AutoAdding /> : <ManualAdding />}
    </PageLayout>
  );
};

export default NewPatient;

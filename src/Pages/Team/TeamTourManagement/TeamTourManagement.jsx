import React from "react";
import { PageLayout } from "../../../Components";
import { TeamSideBarRoutes } from "../../../Shared/routes";
import { Stack, Typography, TextField } from "@mui/material";
import { MainButton } from "../../../Components/Common";
import palette from "../../../Shared/palette";
import { MyDesktopDatePicker } from "./Style";
import moment from "moment";

const TeamTourManagement = () => {
  const [value, setValue] = React.useState(moment("2014-08-18T21:11:54"));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <PageLayout
      profile={null}
      sideBarItems={TeamSideBarRoutes}
      profileType="team"
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontSize: { xs: "18px", sm: "21px", md: "24px" },
            fontWeight: "500",
          }}
        >
          Visualiser sa tournée
        </Typography>
        <MainButton
          text="Valider"
          sx={{
            background: palette.linearHorizontaly,
            pl: 3,
            pr: 3,
            textTransform: "capitalize",
          }}
        />
      </Stack>
      <MyDesktopDatePicker
        inputFormat="MM/DD/YYYY"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </PageLayout>
  );
};

export default TeamTourManagement;

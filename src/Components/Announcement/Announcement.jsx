import React from "react";
import { Box, Typography } from "@mui/material";
import palette from "../../Shared/palette";

const Announcement = () => {
  return (
    <Box sx={{ backgroundColor: palette.lightPrimary, padding: "22px" }}>
      <Typography
        variant="body4"
        component="p"
        sx={{
          textAlign: "center",
          color: palette.whiteText,
          fontSize: "13px",
          lineHeight: "16px",
        }}
      >
        Découvrez notre solution auprès d’une personne de notre équipe
      </Typography>
    </Box>
  );
};

export default Announcement;

import React from "react";
import { Box, Stack, Typography, Container } from "@mui/material";
import { MyVideoPreview } from "./Style";
import { MainButton } from "../Common";
import palette from "../../Shared/palette";

const VideoPreview = ({ preview, title, desc, button }) => {
  return (
    <Box
      sx={{
        backgroundColor: { xs: palette.primary, md: "transparent" },
        my: 5,
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={3}
        >
          <Box sx={{ flex: 2 }}>
            <Typography
              component="h3"
              variant="h4"
              sx={{
                color: { xs: palette.whiteText, md: palette.primary },
                fontWeight: 600,
              }}
            >
              {title}
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                my: { xs: 3, md: 5 },
                color: { xs: palette.blackText, md: "black" },
                opacity: { xs: 0.8, md: 1 },
              }}
            >
              {desc}
            </Typography>
            <MainButton
              text={button}
              sx={{ minWidth: "200px", display: { xs: "none", md: "block" } }}
            />
          </Box>
          <Stack sx={{ flex: 3 }} alignItems="center" spacing={3}>
            <MyVideoPreview
              style={{ width: "100%" }}
              src={preview}
              alt="preview"
            />
            <MainButton
              text={button}
              sx={{
                display: { xs: "block", md: "none" },
                minWidth: "300px",
                backgroundColor: palette.whiteText,
                color: palette.primary,
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default VideoPreview;

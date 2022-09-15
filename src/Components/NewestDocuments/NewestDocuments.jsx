import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { MainButton } from "../Common";
import { FileDetails, DownloadButtonContainer, FileItem } from "./Style";
import palette from "../../Shared/palette";
import FileAddIcon from "../../Assets/Icons/FileAddIcon.svg";
import Pdf from "../../Assets/Pdf.png";
import DownloadButton from "../../Assets/DownloadButton.png";

const filesArray = [
  {
    src: Pdf,
    name: "23/03/2022 - Dr. Alex",
    size: "4.5Mb",
  },
  {
    src: Pdf,
    name: "23/03/2022 - Dr. Alex",
    size: "4.5Mb",
  },
  {
    src: Pdf,
    name: "23/03/2022 - Dr. Alex",
    size: "4.5Mb",
  },
];

const NewestDocuments = () => {
  return (
    <Box
      sx={{
        p: { xs: "20px", md: "30px" },
        backgroundColor: palette.whiteText,
        boxShadow: "0px 4px 15px rgb(0 0 0 / 8%)",
        maxWidth: { xs: "initial", md: "600px" },
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontSize: { xs: "16px", sm: "18px", md: "20px" },
            fontWeight: 500,
            color: palette.primary,
          }}
        >
          Mes derniers documents
        </Typography>
        <MainButton
          sx={{ display: { xs: "none", md: "flex" } }}
          text="Ajouter"
          startIcon={
            <img
              style={{ width: "20px", height: "20px" }}
              src={FileAddIcon}
              alt="add"
            />
          }
        />
      </Stack>
      {filesArray.map((item, index) => (
        <FileItem
          key={index}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <FileDetails direction="row" alignItems="center" spacing={2}>
            <img src={item.src} alt="file" />
            <div>
              <h6>{item.name}</h6>
              <span>{item.size}</span>
            </div>
          </FileDetails>
          <DownloadButtonContainer>
            <img src={DownloadButton} alt="download" />
          </DownloadButtonContainer>
        </FileItem>
      ))}
      <MainButton
        sx={{ display: { xs: "flex", md: "none" }, mx: "auto" }}
        text="Ajouter"
        startIcon={
          <img
            style={{ width: "20px", height: "20px" }}
            src={FileAddIcon}
            alt="add"
          />
        }
      />
    </Box>
  );
};

export default NewestDocuments;

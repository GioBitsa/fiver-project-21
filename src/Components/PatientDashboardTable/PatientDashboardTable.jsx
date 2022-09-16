import React from "react";
import {
  Box,
  Stack,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Divider,
  IconButton,
} from "@mui/material";
import { MyTableContainer, DoctorDetails, DateDetails } from "./Style";
import palette from "../../Shared/palette";
import User2 from "../../Assets/User (2).png";
import User3 from "../../Assets/User (3).png";
import User4 from "../../Assets/User (4).png";
import User5 from "../../Assets/User (5).png";
import Edit from "../../Assets/Icons/Edit.png";
import Delete from "../../Assets/Icons/Delete.png";

const columns = [
  "Médecin consultant",
  "Date & Heure",
  "Description",
  "Localisation",
  "Editer",
];

const rows = [
  {
    src: User2,
    name: "Dr. Jonathan Goris",
    profession: "Medician Specialist",
    date: "Mar 15, 2022",
    time: "11:52 am",
    desc: "The patient in room 3 is in critical phase, we have made a consultation and transferred to the hospital",
    localization: "Victory House, Street-01, France",
  },
  {
    src: User3,
    name: "Dr. Anna L Doyis",
    profession: "Medician Specialist",
    date: "Mar 15, 2022",
    time: "11:52 am",
    desc: "The patient in room 3 is in critical phase, we have made a consultation and transferred to the hospital",
    localization: "Victory House, Street-01, France",
  },
  {
    src: User4,
    name: "Dr. Shimo Edon",
    profession: "Medician Specialist",
    date: "Mar 15, 2022",
    time: "11:52 am",
    desc: "The patient in room 3 is in critical phase, we have made a consultation and transferred to the hospital",
    localization: "Victory House, Street-01, France",
  },
  {
    src: User5,
    name: "Dr. Aman Pathan",
    profession: "Medician Specialist",
    date: "Mar 15, 2022",
    time: "11:52 am",
    desc: "The patient in room 3 is in critical phase, we have made a consultation and transferred to the hospital",
    localization: "Victory House, Street-01, France",
  },
  {
    src: User2,
    name: "Dr. Almina Nusrat",
    profession: "Medician Specialist",
    date: "Mar 15, 2022",
    time: "11:52 am",
    desc: "The patient in room 3 is in critical phase, we have made a consultation and transferred to the hospital",
    localization: "Victory House, Street-01, France",
  },
];

const PatientDashboardTable = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          p: "30px",
          backgroundColor: palette.navbarBackground,
          boxShadow: "0px 4px 15px rgb(0 0 0 / 8%)",
          my: 4,
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
            Historique des consultations :
          </Typography>
          <Typography
            component="p"
            variant="p"
            sx={{
              fontSize: "14px",
              color: palette.blackText,
            }}
          >
            Tout voir
          </Typography>
        </Stack>
        <MyTableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ "& th:last-child": { textAlign: "right" } }}>
                {columns.map((item, index) => (
                  <TableCell key={index}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell width={300}>
                    <DoctorDetails
                      direction="row"
                      alignItems="center"
                      spacing={2}
                    >
                      <img src={item.src} alt="user" />
                      <Box>
                        <h6>{item.name}</h6>
                        <p>{item.profession}</p>
                      </Box>
                    </DoctorDetails>
                  </TableCell>
                  <TableCell width={150}>
                    <DateDetails>
                      <h6>{item.date}</h6>
                      <p>{item.time}</p>
                    </DateDetails>
                  </TableCell>
                  <TableCell width={300}>
                    <Typography
                      component="p"
                      variant="p"
                      sx={{
                        color: palette.blackText,
                        opacity: 0.8,
                        fontSize: "12px",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </TableCell>
                  <TableCell width={200}>
                    <Typography
                      component="p"
                      variant="p"
                      sx={{
                        color: palette.blackText,
                        opacity: 0.8,
                        fontSize: "12px",
                      }}
                    >
                      {item.localization}
                    </Typography>
                  </TableCell>
                  <TableCell width={150}>
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      justifyContent="flex-end"
                    >
                      <IconButton disableRipple>
                        <img src={Edit} alt="edit" />
                      </IconButton>
                      <IconButton disableRipple>
                        <img src={Delete} alt="delete" />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </MyTableContainer>
      </Box>
      {/* mobile device table */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          p: "20px",
          my: 4,
          border: "1px solid rgba(0, 0, 0, 0.5)",
          borderRadius: "5px",
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontSize: { xs: "16px", sm: "18px" },
            fontWeight: 500,
            color: palette.primary,
          }}
        >
          Historique des consultations :
        </Typography>
        <Divider sx={{ my: 1 }} />
        {rows.map((item, index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            sx={{ my: 2 }}
          >
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: { xs: "14px", sm: "16px" },
                fontWeight: 500,
                color: palette.blackText,
                opacity: 0.6,
              }}
            >
              {item.name}
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: 500,
                color: palette.blackText,
                opacity: 0.6,
                textAlign: "right",
              }}
            >
              {item.profession}
            </Typography>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default PatientDashboardTable;

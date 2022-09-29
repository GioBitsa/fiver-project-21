import React from "react";
import { Stack, Typography, Grid } from "@mui/material";
import { Item, SingleMemberContainer } from "./Style";
import TeamMember1 from "../../Assets/TeamMember (1).png";
import TeamMember2 from "../../Assets/TeamMember (2).png";
import TeamMember3 from "../../Assets/TeamMember (3).png";
import TeamMember4 from "../../Assets/TeamMember (4).png";

const membersArray = [
  {
    src: TeamMember1,
    name: "Wade Warren",
    profession: "Surgeon",
  },
  {
    src: TeamMember2,
    name: "Anna L Doyis",
    profession: "Gynologist",
  },
  {
    src: TeamMember3,
    name: "Tamanna TS",
    profession: "Consultant",
  },
  {
    src: TeamMember4,
    name: "Jonh Copper",
    profession: "Medician Specialist",
  },
];

const TeamMembers = () => {
  return (
    <Item>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        sx={{ mb: 2 }}
      >
        <Typography component="h3" variant="h3">
          Équipes
        </Typography>
        <Typography component="h6" variant="h6">
          See all
        </Typography>
      </Stack>
      <Grid container spacing={3}>
        {membersArray?.map((item, index) => (
          <Grid key={index} item xs={6}>
            <SingleMemberContainer>
              <img src={item.src} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.profession}</p>
            </SingleMemberContainer>
          </Grid>
        ))}
      </Grid>
    </Item>
  );
};

export default TeamMembers;

import React, { useState } from "react";
import { Typography } from "@mui/material";
import { DatesContainer } from "./Style";

const DatesSchedule = ({ datesArray }) => {
  const [active, setActive] = useState();

  return (
    <>
      {datesArray?.map((item, index) => (
        <DatesContainer
          key={index}
          direction="row"
          spacing={2}
          alignItems="center"
          onClick={() => setActive(index)}
          className={active === index ? "active" : ""}
        >
          <Typography component="p" variant="p">
            {item.time}
          </Typography>
          <Typography component="p" variant="p">
            {item.text}
          </Typography>
          <Typography component="p" variant="p">
            view details
          </Typography>
        </DatesContainer>
      ))}
    </>
  );
};

export default DatesSchedule;

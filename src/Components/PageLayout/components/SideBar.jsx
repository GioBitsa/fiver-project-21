import React from "react";
import { Box, List } from "@mui/material";
import Logo from "../../../Assets/Logo.png";
import { SideBarHeader, SideBarProfile, MyListItemButton } from "./Style";
import { BiChevronDown } from "react-icons/bi";
import palette from "../../../Shared/palette";

const SideBar = ({ profile, sideBarItems }) => {
  return (
    <div>
      <SideBarHeader>
        <img src={Logo} alt="MobilityCare" />
        MobilityCare
      </SideBarHeader>
      {profile && (
        <SideBarProfile>
          <img src={profile.img} alt={profile.name} />
          <Box>
            <span>{profile.desc}</span>
            <h6>{profile.name}</h6>
          </Box>
          <BiChevronDown />
        </SideBarProfile>
      )}
      <List>
        {sideBarItems?.map((item, index) => (
          <MyListItemButton
            key={index}
            disableRipple
            sx={
              item.active && {
                backgroundColor: palette.sideBarButtonBackground,
                borderRight: `5px solid ${palette.primary}`,
              }
            }
          >
            {item.icon === null ? (
              <>
                <img src={item.disabledIcon} alt={item.text} />
                <span className="disabled">{item.text}</span>
              </>
            ) : (
              <>
                <img src={item.icon} alt={item.text} />
                <span>{item.text}</span>
              </>
            )}
          </MyListItemButton>
        ))}
      </List>
    </div>
  );
};

export default SideBar;

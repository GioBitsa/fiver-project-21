import React from "react";
import { Box, List } from "@mui/material";
import Logo from "../../../Assets/Logo.png";
import { SideBarHeader, SideBarProfile, MyListItemButton } from "./Style";
import { BiChevronDown } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = ({ profile, sideBarItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

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
            className={item.pathName === location.pathname ? "active" : ""}
            onClick={() => navigate(item.pathName)}
          >
            {item.pathName === location.pathname ? (
              <>
                <img src={item.icon} alt={item.text} />
                <span>{item.text}</span>
              </>
            ) : (
              <>
                <img src={item.disabledIcon} alt={item.text} />
                <span className="disabled">{item.text}</span>
              </>
            )}
          </MyListItemButton>
        ))}
      </List>
    </div>
  );
};

export default SideBar;

import React, { useState } from "react";
import { Box, List, Collapse } from "@mui/material";
import Logo from "../../../Assets/Logo.png";
import { SideBarHeader, SideBarProfile, MyListItemButton } from "./Style";
import { BiChevronDown } from "react-icons/bi";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const SideBar = ({ profile, sideBarItems }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

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
        {sideBarItems?.map((item, index) =>
          item.children ? (
            <div key={index}>
              <MyListItemButton
                disableRipple
                className={item.pathName === location.pathname ? "active" : ""}
                onClick={() => {
                  setOpen(!open);
                }}
                endIcon={open ? <MdExpandLess /> : <MdExpandMore />}
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
              {item.children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <MyListItemButton
                      disableRipple
                      className={
                        item.pathName === location.pathname ? "active" : ""
                      }
                      onClick={() => navigate(item.pathName)}
                      sx={{ pl: "48px" }}
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
                    {item.children?.map((childItem, childIndex) => (
                      <MyListItemButton
                        key={childIndex}
                        disableRipple
                        className={
                          childItem.pathName === location.pathname
                            ? "active"
                            : ""
                        }
                        onClick={() => navigate(childItem.pathName)}
                        sx={{ pl: "48px" }}
                      >
                        {childItem.pathName === location.pathname ? (
                          <>
                            <img src={childItem.icon} alt={childItem.text} />
                            <span>{childItem.text}</span>
                          </>
                        ) : (
                          <>
                            <img
                              src={childItem.disabledIcon}
                              alt={childItem.text}
                            />
                            <span className="disabled">{childItem.text}</span>
                          </>
                        )}
                      </MyListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </div>
          ) : (
            <MyListItemButton
              key={index}
              disableRipple
              className={item.pathName === location.pathname ? "active" : ""}
              onClick={() => {
                navigate(item.pathName);
              }}
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
          )
        )}
      </List>
    </div>
  );
};

export default SideBar;

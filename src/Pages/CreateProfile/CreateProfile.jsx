import React, { useState } from "react";
import { Typography, Stepper } from "@mui/material";
import {
  MainBox,
  MyContainer,
  LogoContainer,
  MyStep,
  MyStepLabel,
  ButtonContainer,
} from "./Style";
import TopEllipse from "../../Assets/NewsLetterEllipse.png";
import BottomEllipse from "../../Assets/Ellipse.png";
import Dots from "../../Assets/WhiteDots.png";
import Logo from "../../Assets/Logo.png";
import Step1Current from "../../Assets/CreateProfile/Step1Current.png";
import Step1Done from "../../Assets/CreateProfile/Step1Done.png";
import Step2Current from "../../Assets/CreateProfile/Step2Current.png";
import Step2Disabled from "../../Assets/CreateProfile/Step2Disabled.png";
import Step2Done from "../../Assets/CreateProfile/Step2Done.png";
import Step3Current from "../../Assets/CreateProfile/Step3Current.png";
import Step3Disabled from "../../Assets/CreateProfile/Step3Disabled.png";
import { MainButton } from "../../Components/Common";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import History from "./History/History";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";

const CreateProfile = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <MainBox>
      <MyContainer maxWidth="lg">
        <LogoContainer>
          <img src={Logo} alt="MobilityCare" />
          <Typography component="h2">MobilityCare</Typography>
        </LogoContainer>
        <Stepper activeStep={activeStep} alternativeLabel sx={{ my: 5 }}>
          <MyStep completed={activeStep === 1 || (activeStep === 2 && true)}>
            <MyStepLabel
              StepIconComponent={() => (
                <img
                  src={activeStep === 0 ? Step1Current : Step1Done}
                  alt="Informations personnelles"
                />
              )}
            >
              Informations personnelles
            </MyStepLabel>
          </MyStep>
          <MyStep completed={activeStep === 2 && true}>
            <MyStepLabel
              StepIconComponent={() => (
                <img
                  src={
                    activeStep === 0
                      ? Step2Disabled
                      : activeStep === 1
                      ? Step2Current
                      : Step2Done
                  }
                  alt="Antécédents et traitement au long court"
                />
              )}
            >
              Antécédents et traitement au long court
            </MyStepLabel>
          </MyStep>
          <MyStep>
            <MyStepLabel
              StepIconComponent={() => (
                <img
                  src={activeStep === 2 ? Step3Current : Step3Disabled}
                  alt="profil"
                />
              )}
            >
              Photo de profil
            </MyStepLabel>
          </MyStep>
        </Stepper>
        {activeStep === 0 ? (
          <PersonalInformation />
        ) : activeStep === 1 ? (
          <History />
        ) : activeStep === 2 ? (
          <ProfilePhoto />
        ) : (
          ""
        )}
        <ButtonContainer
          direction="row"
          spacing={3}
          justifyContent={{ xs: "center", md: "flex-end" }}
        >
          <MainButton
            className="secondary"
            text="Précédent"
            onClick={() =>
              setActiveStep(activeStep !== 0 ? activeStep - 1 : activeStep)
            }
          />
          <MainButton
            text="Suivant"
            onClick={() =>
              setActiveStep(activeStep !== 2 ? activeStep + 1 : activeStep)
            }
          />
        </ButtonContainer>
      </MyContainer>
      <img className="top-ellipse" src={TopEllipse} alt="ellipse" />
      <img className="bottom-ellipse" src={BottomEllipse} alt="ellipse" />
      <img className="dots" src={Dots} alt="dots" />
    </MainBox>
  );
};

export default CreateProfile;

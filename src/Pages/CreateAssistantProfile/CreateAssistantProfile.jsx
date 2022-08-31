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
import EducationStepCurrent from "../../Assets/CreateProfile/EducationStepCurrent.png";
import EducationStepDisabled from "../../Assets/CreateProfile/EducationStepDisabled.png";
import EducationStepDone from "../../Assets/CreateProfile/EducationStepDone.png";
import Step3Current from "../../Assets/CreateProfile/Step3Current.png";
import Step3Disabled from "../../Assets/CreateProfile/Step3Disabled.png";
import { MainButton } from "../../Components/Common";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import EducationInformation from "./EducationInformation/EducationInformation";
import palette from "../../Shared/palette";

const CreateAssistantProfile = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <MainBox>
      <MyContainer maxWidth="lg">
        <LogoContainer>
          <img src={Logo} alt="MobilityCare" />
          <Typography component="h2">MobilityCare</Typography>
        </LogoContainer>
        <Typography
          component="h2"
          variant="h2"
          sx={{
            color: palette.primary,
            fontSize: "24px",
            fontWeight: 600,
            my: 2,
          }}
        >
          Créer votre profil d’assistant(e)
        </Typography>
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
                      ? EducationStepDisabled
                      : activeStep === 1
                      ? EducationStepCurrent
                      : EducationStepDone
                  }
                  alt="Education & Experience"
                />
              )}
            >
              Education & Experience
            </MyStepLabel>
          </MyStep>
          <MyStep>
            <MyStepLabel
              StepIconComponent={() => (
                <img
                  src={activeStep === 2 ? Step3Current : Step3Disabled}
                  alt="profile"
                />
              )}
            >
              Upload Photo
            </MyStepLabel>
          </MyStep>
        </Stepper>
        {activeStep === 0 ? (
          <PersonalInformation />
        ) : activeStep === 1 ? (
          <EducationInformation />
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

export default CreateAssistantProfile;

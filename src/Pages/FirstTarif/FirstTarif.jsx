import React from "react";
import { Navbar, TarifHeroSection } from "../../Components";
import FirstTarifHeroImage from "../../Assets/Tarif/FirstTarifHeroImage.png";
import FirstTarifBackgroundImage from "../../Assets/Tarif/FirstTarifBackgroundImage.png";

const FirstTarif = () => {
  return (
    <>
      <Navbar />
      <TarifHeroSection
        mainImage={FirstTarifHeroImage}
        backgroundImage={FirstTarifBackgroundImage}
        title="E-cabinet"
        desc="E-cabinet complet avec l’ensemble des outils numériques et les périphériques nécessaires au bon fonctionnement du dispositif."
        paymentTitle="Choisissez votre plan :"
        firstButton="Location"
        secondButton="Achat"
      />
    </>
  );
};

export default FirstTarif;

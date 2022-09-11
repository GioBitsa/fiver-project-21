import React from "react";
import {
  Navbar,
  TarifHeroSection,
  ServicesComponent,
  Footer,
} from "../../Components";
import FirstTarifHeroImage from "../../Assets/Tarif/FirstTarifHeroImage.png";
import FirstTarifBackgroundImage from "../../Assets/Tarif/FirstTarifBackgroundImage.png";
import Services1 from "../../Assets/Services (1).png";
import Services2 from "../../Assets/Services (2).png";
import Services3 from "../../Assets/Services (3).png";

const FirstTarif = () => {
  const contentArray = [
    {
      image: Services1,
      title: "Accompagnement",
      desc: "Un accompagnement à la mise en place de votre activité.",
    },
    {
      image: Services2,
      title: "Maintenance",
      desc: "Maintenance informatique et du matériel pour ne pas altérer votre pratique.",
    },
    {
      image: Services3,
      title: "Securité",
      desc: "Système entièrement sécurisé avec possibilité",
    },
    {
      image: Services1,
      title: "SAV",
      desc: "Gestion panne matériel > 72 heures",
    },
    {
      image: Services2,
      title: "Garantie",
      desc: "Durant le durée de la location ou 24 mois en cas d’achat.",
    },
    {
      image: Services3,
      title: "Système d’alerte",
      desc: "Notifications et alertes en cas d’anomalie ou de dysfonctionnement objectivé par nos équipe.",
    },
    {
      image: Services1,
      title: "Installation et mise en service du système",
      desc: "Nous vous accompagnions jusqu’à ce que notre solution soit paramétrée et installée",
    },
    {
      image: Services2,
      title: "Formation",
      desc: "Des formations adaptées a chaque niveau.",
    },
    {
      image: Services3,
      title: "Branding/marketing",
      desc: "Mise a disposition d’éléments marketing  ( artcile, publication, réseau sociaux..) pour valoriser vos projets.",
    },
  ];

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
      <ServicesComponent content={contentArray} />
      <Footer />
    </>
  );
};

export default FirstTarif;

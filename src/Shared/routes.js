import Home from "../Assets/Icons/Home.png";
import HomeDisabled from "../Assets/Icons/HomeDisabled.png";
import Message from "../Assets/Icons/Message.png";
import MessageDisabled from "../Assets/Icons/MessageDisabled.png";
import List from "../Assets/Icons/List.png";
import ListDisabled from "../Assets/Icons/ListDisabled.png";
import Heart from "../Assets/Icons/Heart.png";
import HeartDisabled from "../Assets/Icons/HeartDisabled.png";
import Tick from "../Assets/Icons/Tick.png";
import TickDisabled from "../Assets/Icons/TickDisabled.png";
import Calendar from "../Assets/Icons/Calendar.png";
import CalendarDisabled from "../Assets/Icons/CalendarDisabled.png";
import Chat from "../Assets/Icons/Chat.png";
import ChatDisabled from "../Assets/Icons/ChatDisabled.png";
import MyPatients from "../Assets/Icons/MyPatients.png";
import MyPatientsDisabled from "../Assets/Icons/MyPatientsDisabled.png";
import Agenda from "../Assets/Icons/Agenda.png";
import AgendaDisabled from "../Assets/Icons/AgendaDisabled.png";
import Structure from "../Assets/Icons/Structure.png";
import StructureDisabled from "../Assets/Icons/StructureDisabled.png";
import Consultations from "../Assets/Icons/Consultations.png";
import ConsultationsDisabled from "../Assets/Icons/ConsultationsDisabled.png";
import Team from "../Assets/Icons/Team.png";
import TeamDisabled from "../Assets/Icons/TeamDisabled.png";
import Transmission from "../Assets/Icons/Transmission.png";
import TransmissionDisabled from "../Assets/Icons/TransmissionDisabled.png";
import External from "../Assets/Icons/External.png";
import ExternalDisabled from "../Assets/Icons/ExternalDisabled.png";
import Application from "../Assets/Icons/Application.png";
import ApplicationDisabled from "../Assets/Icons/ApplicationDisabled.png";
import SettingsIcon from "../Assets/Icons/SettingsIcon.png";
import SettingsIconDisabled from "../Assets/Icons/SettingsIconDisabled.png";
import Corespond from "../Assets/Icons/Corespond.png";

export const PatientSideBarRoutes = [
  {
    icon: Home,
    disabledIcon: HomeDisabled,
    text: "Tableau de bord",
    pathName: "/patient/dashboard",
  },
  {
    icon: Message,
    disabledIcon: MessageDisabled,
    text: "Messages",
    pathName: "/patient/message",
  },
  {
    icon: List,
    disabledIcon: ListDisabled,
    text: "Dossier M??dical",
    pathName: "/patient/medical",
  },
  {
    icon: Heart,
    disabledIcon: HeartDisabled,
    text: "Mes Favoris",
    pathName: "/patient/favorites",
  },
  {
    icon: Tick,
    disabledIcon: TickDisabled,
    text: "Historique",
    pathName: "/patient/history",
  },
  {
    icon: Calendar,
    disabledIcon: CalendarDisabled,
    text: "Calendrier consultations programm??",
    pathName: "/patient/calendar",
  },
  {
    icon: Chat,
    disabledIcon: ChatDisabled,
    text: "Demande d???une consultation non programm??e",
    pathName: "/patient/chat",
  },
];

export const DoctorSideBarRoutes = [
  {
    icon: Home,
    disabledIcon: HomeDisabled,
    text: "Tableau de bord",
    pathName: "/doctor/dashboard",
  },
  {
    icon: MyPatients,
    disabledIcon: MyPatientsDisabled,
    text: "Mes patients",
    pathName: "/doctor/list",
  },
  {
    icon: List,
    disabledIcon: ListDisabled,
    text: "Dossier M??dical",
    pathName: "/doctor/medical",
  },
  {
    icon: Message,
    disabledIcon: MessageDisabled,
    text: "Mes messages",
    pathName: "/doctor/message",
  },
  {
    icon: Agenda,
    disabledIcon: AgendaDisabled,
    text: "Mon agenda",
    pathName: "/doctor/agenda",
  },
  {
    icon: Structure,
    disabledIcon: StructureDisabled,
    text: "Mon compte structure de soins",
    pathName: "/doctor/structure",
  },
  {
    icon: Corespond,
    disabledIcon: Corespond,
    text: "Mes correspondants",
    pathName: "/doctor/corespond",
  },
];

export const AssistantSideBarRoutes = [
  {
    icon: Home,
    disabledIcon: HomeDisabled,
    text: "Tableau de bord",
    pathName: "/assistant/dashboard",
  },
  {
    icon: Message,
    disabledIcon: MessageDisabled,
    text: "Messages",
    pathName: "/assistant/message",
  },
  {
    icon: Calendar,
    disabledIcon: CalendarDisabled,
    text: "Calendrier consultations programm??",
    pathName: "/assistant/calendar",
  },
  {
    icon: Chat,
    disabledIcon: ChatDisabled,
    text: "Demande de consultation non programm??e",
    pathName: "/assistant/chat",
  },
  {
    icon: MyPatients,
    disabledIcon: MyPatientsDisabled,
    text: "Mes patients",
    pathName: "/assistant/list",
  },
  {
    icon: Consultations,
    disabledIcon: ConsultationsDisabled,
    text: "Mes consultations r??alis??es",
    pathName: "/assistant/consultations",
  },
];

export const TeamSideBarRoutes = [
  {
    icon: Home,
    disabledIcon: HomeDisabled,
    text: "Tableau de bord",
    pathName: "/team/dashboard",
  },
  {
    icon: MyPatients,
    disabledIcon: MyPatientsDisabled,
    text: "Dossiers m??dicaux",
    pathName: "/team/list",
  },
  {
    icon: Chat,
    disabledIcon: ChatDisabled,
    text: "Demande de consultation non programm??e",
    pathName: "/team/chat",
  },
  {
    icon: Message,
    disabledIcon: MessageDisabled,
    text: "Messages",
    pathName: "/team/message",
  },
  {
    icon: Team,
    disabledIcon: TeamDisabled,
    text: "Team",
    pathName: "/team/team",
    children: [
      {
        icon: Team,
        disabledIcon: TeamDisabled,
        text: "Nouveau patient",
        pathName: "/team/newpatient",
      },
      {
        icon: Team,
        disabledIcon: TeamDisabled,
        text: "Planning hebdomadaire",
        pathName: "/team/planning",
      },
    ],
  },
  {
    icon: Agenda,
    disabledIcon: AgendaDisabled,
    text: "Agenda",
    pathName: "/team/agenda",
    children: [
      {
        icon: Agenda,
        disabledIcon: AgendaDisabled,
        text: "Tour Management",
        pathName: "/team/tourmanagement",
      },
    ],
  },
  {
    icon: Transmission,
    disabledIcon: TransmissionDisabled,
    text: "Transmission",
    pathName: "/team/transmission",
  },
  {
    icon: External,
    disabledIcon: ExternalDisabled,
    text: "External Contacts",
    pathName: "/team/external",
  },
  {
    icon: Application,
    disabledIcon: ApplicationDisabled,
    text: "Application for Admission",
    pathName: "/team/application",
  },
  {
    icon: SettingsIcon,
    disabledIcon: SettingsIconDisabled,
    text: "Settings",
    pathName: "/team/settings",
  },
];

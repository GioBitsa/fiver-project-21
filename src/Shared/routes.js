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
    text: "Dossier Médical",
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
    text: "Calendrier consultations programmé",
    pathName: "/patient/calendar",
  },
  {
    icon: Chat,
    disabledIcon: ChatDisabled,
    text: "Demande d’une consultation non programmée",
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
    text: "Dossier Médical",
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

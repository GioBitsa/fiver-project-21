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

export const PatientSideBarRoutes = [
  {
    icon: Home,
    disabledIcon: HomeDisabled,
    text: "Tableau de bord",
    active: false,
    pathName: "/patient/dashboard",
  },
  {
    icon: Message,
    disabledIcon: MessageDisabled,
    text: "Messages",
    active: true,
    pathName: "/patient/message",
  },
  {
    icon: List,
    disabledIcon: ListDisabled,
    text: "Dossier Médical",
    active: true,
    pathName: "/patient/medical",
  },
  {
    icon: Heart,
    disabledIcon: HeartDisabled,
    text: "Mes Favoris",
    active: false,
    pathName: "/patient/favorites",
  },
  {
    icon: Tick,
    disabledIcon: TickDisabled,
    text: "Historique",
    active: false,
    pathName: "/patient/history",
  },
  {
    icon: Calendar,
    disabledIcon: CalendarDisabled,
    text: "Calendrier consultations programmé",
    active: false,
    pathName: "/patient/calendar",
  },
  {
    icon: Chat,
    disabledIcon: ChatDisabled,
    text: "Demande d’une consultation non programmée",
    active: false,
    pathName: "/patient/chat",
  },
];

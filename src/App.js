import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Teritories,
  Home,
  Login,
  Register,
  Recovery,
  CreateProfile,
  CreateAssistantProfile,
  CompleteProfile,
  CompleteDoctorProfile,
  Structure,
  Priorite,
  Medicine,
  Solution,
  FirstTarif,
  SecondTarif,
  ThirdTarif,
  Products,
  PatientDashboard,
  PatientHistory,
  PatientMedicalFiles,
  PatientFavorites,
  PatientChat,
  PatientCalendar,
  PatientMessage,
  Formations,
  SecondMedicine,
  PrivacyPolicy,
  DoctorDashboard,
  PatientsList,
  DoctorMedicalFiles,
  DoctorMessage,
  DoctorAgenda,
  DoctorCorespond,
  DoctorStructure,
  AssistantDashboard,
  AssistantMessage,
  AssistantCalendar,
  AssistantChat,
  AssistantPatientList,
  AssistantConsultations,
  TeamDashboard,
} from "./Pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/create" element={<CreateProfile />} />
      <Route path="/createassistant" element={<CreateAssistantProfile />} />
      <Route path="/complete" element={<CompleteProfile />} />
      <Route path="/completedoctor" element={<CompleteDoctorProfile />} />
      <Route path="/teritories" element={<Teritories />} />
      <Route path="/structure" element={<Structure />} />
      <Route path="/priorite" element={<Priorite />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/firsttarif" element={<FirstTarif />} />
      <Route path="/secondtarif" element={<SecondTarif />} />
      <Route path="/thirdtarif" element={<ThirdTarif />} />
      <Route path="/products" element={<Products />} />
      <Route path="/formations" element={<Formations />} />
      <Route path="/secondmedicine" element={<SecondMedicine />} />
      <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      <Route path="/patient">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route path="history" element={<PatientHistory />} />
        <Route path="medical" element={<PatientMedicalFiles />} />
        <Route path="favorites" element={<PatientFavorites />} />
        <Route path="chat" element={<PatientChat />} />
        <Route path="calendar" element={<PatientCalendar />} />
        <Route path="message" element={<PatientMessage />} />
      </Route>
      <Route path="/doctor">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DoctorDashboard />} />
        <Route path="list" element={<PatientsList />} />
        <Route path="medical" element={<DoctorMedicalFiles />} />
        <Route path="message" element={<DoctorMessage />} />
        <Route path="agenda" element={<DoctorAgenda />} />
        <Route path="structure" element={<DoctorStructure />} />
        <Route path="corespond" element={<DoctorCorespond />} />
      </Route>
      <Route path="/assistant">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AssistantDashboard />} />
        <Route path="message" element={<AssistantMessage />} />
        <Route path="calendar" element={<AssistantCalendar />} />
        <Route path="chat" element={<AssistantChat />} />
        <Route path="list" element={<AssistantPatientList />} />
        <Route path="consultations" element={<AssistantConsultations />} />
      </Route>
      <Route path="/team">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<TeamDashboard />} />
        <Route path="list" element={<AssistantMessage />} />
        <Route path="chat" element={<AssistantCalendar />} />
        <Route path="message" element={<AssistantChat />} />
        <Route path="team" element={<AssistantPatientList />} />
        <Route path="agenda" element={<AssistantConsultations />} />
        <Route path="transmission" element={<AssistantConsultations />} />
        <Route path="external" element={<AssistantConsultations />} />
        <Route path="application" element={<AssistantConsultations />} />
      </Route>
    </Routes>
  );
};

export default App;

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
      <Route path="/assistant" element={<CreateAssistantProfile />} />
      <Route path="/complete" element={<CompleteProfile />} />
      <Route path="/doctor" element={<CompleteDoctorProfile />} />
      <Route path="/teritories" element={<Teritories />} />
      <Route path="/structure" element={<Structure />} />
      <Route path="/priorite" element={<Priorite />} />
      <Route path="/medicine" element={<Medicine />} />
      <Route path="/solution" element={<Solution />} />
      <Route path="/firsttarif" element={<FirstTarif />} />
      <Route path="/secondtarif" element={<SecondTarif />} />
      <Route path="/thirdtarif" element={<ThirdTarif />} />
      <Route path="/products" element={<Products />} />
      <Route path="/patient">
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<PatientDashboard />} />
        <Route path="history" element={<PatientHistory />} />
      </Route>
    </Routes>
  );
};

export default App;

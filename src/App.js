import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Teritories, Home, Login, Register, Recovery } from "./Pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/recovery" element={<Recovery />} />
      <Route path="/teritories" element={<Teritories />} />
    </Routes>
  );
};

export default App;

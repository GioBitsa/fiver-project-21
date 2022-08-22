import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Teritories, Home } from "./Pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teritories" element={<Teritories />} />
    </Routes>
  );
};

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Teritories } from "./Pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Teritories />} />
    </Routes>
  );
};

export default App;

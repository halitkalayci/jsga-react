import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import CarList from "./pages/CarList/CarList";
import Rental from "./pages/Rental/Rental";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]); // dependency list
  const increase = () => {
    setCount(count + 1);
  };
  const decrase = () => {
    setCount(count - 1);
  };
  return (
    <div className="App">
      {/* Self closing tag */}
      <Navbar />
      <Routes>
        <Route path="/car-list" element={<CarList />} />
        <Route path="/rental" element={<Rental />} />
      </Routes>
    </div>
  );
}
export default App;

import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import CarList from './pages/CarList/CarList';
import Rental from './pages/Rental/Rental';
import { Route, Routes } from 'react-router-dom';
import AddCar from './pages/AddCar/AddCar';
import Login from './pages/Login/Login';
import Flexbox from './pages/Flexbox/Flexbox';

function App() {
 const [count, setCount] = useState(0);
 const [value, setValue] = useState(0);

 useEffect(() => {
  console.log(count);
 }, [count]); // dependency list

 useEffect(() => {
  // useEffect tetiklendiğinde çalışacak alan.
 }, []);

 useEffect(() => {}); // => Sayfadaki her state bağımlı olmak.

 // useContext, useNavigate
 // useReducer, useCallBack, useMemo, useRef, useLayoutEffect, useDebugValue

 const increase = () => {
  setCount(count + 1);
 };
 const decrase = () => {
  setCount(count - 1);
 };
 return (
  <div className="App">
   <Navbar />
   <Routes>
    <Route path="/" element={<CarList />} />
    <Route path="/car-list" element={<CarList />} />
    <Route path="/rental" element={<Rental />} />
    <Route path="/add-car" element={<AddCar />} />
    <Route path="/login" element={<Login />} />
    <Route path="/flex" element={<Flexbox />} />
   </Routes>
  </div>
 );
}
export default App;

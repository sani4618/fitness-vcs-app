import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import ContactUs from './components/ContactUs';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Fitnessview from './components/Fitnessview';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element = {<Home/>}/>
      <Route path="/about"exact element={<AboutUs/>}/>
      <Route path="/contact"exact element={<ContactUs/>}/>
      <Route path="/login"exact element={<Login/>}/>
      <Route path="/reg"exact element={<Register/>}/>
      <Route path="/view"exact element={<Fitnessview/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

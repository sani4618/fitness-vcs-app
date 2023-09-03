import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <Login/>
      <Register/>
      <ContactUs/>
    </div>
  );
}

export default App;

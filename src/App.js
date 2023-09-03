import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <Home/>
      <AboutUs/>
      <Login/>
      <Register/>
    </div>
  );
}

export default App;

import './App.css';
import './css/style.css'
import {Route,Routes} from 'react-router-dom'
import Home from './Component/home';
import Login from './Component/login';
import SignUp from './Component/signup';
import Privateroute from './Component/privateroute';

function App() {
  return (
    <Routes>
      <Route path='/' 
      element={
      <Privateroute>
      <Home />
      </Privateroute>
      } 
      />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Routes>
  );
}

export default App;

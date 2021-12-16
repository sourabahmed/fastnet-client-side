
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signin from './pages/Signin/Signin';

function App() {
  return (
    <div className="app">
       <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

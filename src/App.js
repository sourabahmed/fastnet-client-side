
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signin from './pages/Signin/Signin';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="app">
       <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          {/* <Route path="servicedetails" element={<ServiceDetails />} /> */}
          <Route
          path="/servicedetails"
          element={
            <PrivateRoute>
              <ServiceDetails />
            </PrivateRoute>
          }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

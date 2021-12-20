
import './App.css';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Signin from './pages/Signin/Signin';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import PrivateRoute from './pages/Home/PrivateRoute/PrivateRoute';
import AuthProvider from './context/AuthContext';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Payment from './pages/Dashboard/Payment/Payment';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';

function App() {
  return (
    <div className="app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<Signin />} />
            <Route path="dashboard" element={<Dashboard />} />
           
            <Route
              path="/servicedetails/:serviceId"
              element={
                <PrivateRoute>
                  <ServiceDetails />
                </PrivateRoute>
              }
            />

            

            <Route path="dashboard" element={<Dashboard />}>
              <Route path="payment" element={<Payment />} />
              <Route path="myorders" element={<MyOrders />} />
              <Route path="manageorders" element={<ManageOrders />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

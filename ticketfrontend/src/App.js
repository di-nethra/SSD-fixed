import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import UserAccountDashboard from './components/user_profile/UserAccountDashboard';
import AccountBalancePage from './components/user_profile/AccountBalancePage';
import AddCredits from './components/user_profile/AddCredits';
import TabsView from './components/driver_profile/DriverAccountDashboard';
import OtTabs from './components/driver_profile/DriverOTDashboard';
import DriverAccountTabs from './components/driver_profile/DriverAccountDashboard';
import LoginPage from "./components/login/LoginPage";
import SignUpPage from "./components/login/SignUpPage";
import NavBar from "./components/Common/NavBar";



function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
      <Route path="/" element={<LoginPage />}>
        </Route>
        <Route path="/driver/Account" element={<DriverAccountTabs />}>
        </Route>
        <Route path="/register" element={<SignUpPage />}>
        </Route>
        <Route path="/customer/Account" element={<UserAccountDashboard />}>
        </Route>
        <Route path="/addCredit" element={<AddCredits />}>
        </Route>
        <Route path="/accountBalance" element={<AccountBalancePage />}>
        </Route>
        <Route path="/driverOT" element={<OtTabs />}>
        </Route>
      </Routes>
    
  </Router>  
  </>

  );
}

export default App;

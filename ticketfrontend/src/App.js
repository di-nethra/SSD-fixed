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
import RequestOTModal from './components/driver_profile/RequestOTModal';



function App() {
  return (
    <>
    <Router>

    
      <Routes>
        <Route path="/driverAccount">
          <DriverAccountTabs />
        </Route>
        <Route path="/userAccount">
          <UserAccountDashboard />
        </Route>
        <Route path="/addCredit">
          <AddCredits />
        </Route>
        <Route path="/accountBalance">
          <AccountBalancePage />
        </Route>
        <Route path="/driverOT">
          <OtTabs />
        </Route>
      </Routes>
    
  </Router> 
  <div className="App">
     {/* <UserAccountDashboard /> */}
     {/* <AccountBalancePage /> */}
     {/* <AddCredits /> */}
     {/* <DriverAccountTabs /> */}
     {/* <OtTabs /> */}
     {/* <RequestOTModal /> */}
    </div>
  </>

  );
}

export default App;

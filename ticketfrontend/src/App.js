import logo from './logo.svg';
import './App.css';
import UserAccountDashboard from './components/user_profile/UserAccountDashboard';
import AccountBalancePage from './components/user_profile/AccountBalancePage';
import AddCredits from './components/user_profile/AddCredits';
import TabsView from './components/driver_profile/DriverAccountDashboard';
import OtTabs from './components/driver_profile/DriverOTDashboard';


function App() {
  return (
    <div className="App">
     {/* <UserAccountDashboard /> */}
     {/* <AccountBalancePage /> */}
     {/* <AddCredits /> */}
     {/* <TabsView /> */}
     <OtTabs />
    </div>
  );
}

export default App;

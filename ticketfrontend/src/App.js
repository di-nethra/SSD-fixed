import logo from './logo.svg';
import './App.css';
import UserAccountDashboard from './components/user_profile/UserAccountDashboard';
import AccountBalancePage from './components/user_profile/AccountBalancePage';
import AddCredits from './components/user_profile/AddCredits';


function App() {
  return (
    <div className="App">
     {/* <UserAccountDashboard /> */}
     {/* <AccountBalancePage /> */}
     <AddCredits />
    </div>
  );
}

export default App;

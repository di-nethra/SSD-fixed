import logo from './logo.svg';
import './App.css';
import UserAccountDashboard from './components/user_profile/UserAccountDashboard';
import AccountBalancePage from './components/user_profile/AccountBalancePage';


function App() {
  return (
    <div className="App">
     {/* <UserAccountDashboard /> */}
     <AccountBalancePage />
    </div>
  );
}

export default App;

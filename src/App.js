import { useSelector } from 'react-redux';
import './App.css';
import Login from './views/login';
import Home from './views/home';

function App() {
  const appData = useSelector((state) => state);
  return (
    <div className="App">
        {
          appData.login.users.length===0 ? <Login/> : <Home data={appData.home.users}/>
        }
    </div>
  );
}

export default App;

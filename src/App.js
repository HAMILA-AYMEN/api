
import './App.css';
import UserList from './UserList'
import Navigation from './Navigation'
import { Route, Routes } from 'react-router-dom';
import Details from './Details';
function App() {
  return (
    <div className="App">
       <Navigation />
       <Routes>
       <Route path="/UserList/:user" element={ <UserList />} />
       <Route path="/Details/:id" element={ <Details />} />
      
       </Routes>
      
     
    </div>
  );
}

export default App;

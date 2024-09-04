import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import GetUsers from './components/GetUsers';
import CreateUsers from './components/CreateUsers';
import CreateUsersForm from './components/CreateUsersForm';

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Get Users</NavLink>
          </li>
          <li>
            <NavLink to='/post'>Create Users</NavLink>
          </li>
          <li>
            <NavLink to='/post2'>Create Users Form</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<GetUsers />} />
        <Route path='/post' element={<CreateUsers />} />
        <Route path='/post2' element={<CreateUsersForm />} />
      </Routes>   
    </Router>
  );
}

export default App;

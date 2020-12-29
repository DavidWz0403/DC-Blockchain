import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import NavbarDC from './Components/NavbarDC';
import Dashboard from './Components/Dashboard';
import CreateKeys from './Components/CreateKeys';
import Account from './Components/Account';

function App() {
  return (
    <Container>
      <NavbarDC />
      <Account />
    </Container>

  );
}

export default App;

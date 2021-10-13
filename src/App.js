import { useState, useEffect } from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Song from './components/Song';
import Albums from './components/Albums';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Lyrics from './components/Lyrics';
import BackButton from './components/BackButton';


function App() {
  const [Count, setCount] = useState(0);

  function increaseCount() {
    setCount(prevCount => prevCount + 1)
  }
  function decreaseCount() {
    setCount(prevCount => prevCount - 1)
  }

  // Countdown
  const [timer, setTimer] = useState(120)

  useEffect(() => {
    const countdown = () => setTimer(t => t - 1);

    const int = setInterval(countdown, 1000);
    return () => clearInterval(int);
  }, []);

  return (
    <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>CG</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/About">About</Nav.Link>
              <Nav.Link href="/Album">Albums</Nav.Link>
              <Nav.Link href="/Album/Maniac">Maniac</Nav.Link>
              <Nav.Link href="/Album/Grow">Grow</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      <h1>Conan Gray</h1>
      <Switch>
        <Route exact path="/About">
          <Introduction/>
        </Route>
        <Route exact path="/Album">
          <Albums/>
        </Route>
        <Route exact path="/Album/:Song">
          <Container>
            <Song />
            {/* <Button variant="dark" onClick={Count ? decreaseCount : increaseCount}>Like</Button> */}
          </Container>
        </Route>
      </Switch>
      <BackButton/>
    </Router>
  );
}

export default App;

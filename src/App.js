import {useState} from 'react'
import {Row, Col, Container, Button } from 'react-bootstrap';
import './App.css';
import Songs from './components/Songs';
import Albums from './components/Albums';
import Header from './components/Header';
import Introduction from './components/Introduction';


function App() {
  const [Count, setCount] = useState(0);

  function increaseCount(){
      setCount(prevCount => prevCount + 1)
  }
  function decreaseCount(){
      setCount(prevCount => prevCount - 1)
  }

  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Albums/>
      <Container>
        <h2>Top Hits</h2>
        <Songs/>
        <p>{Count}</p>
        <Button variant="dark" onClick={Count? decreaseCount: increaseCount}>Like</Button>
      </Container>
    </div>
  );
}

export default App;

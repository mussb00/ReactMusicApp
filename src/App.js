import {useState} from 'react'
import {Row, Col, Container } from 'react-bootstrap';
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
        <Row>
          <Col aria-label="likeCount">
            <Songs name="Maniac" count= {Count} increaseCount={increaseCount} decreaseCount = {decreaseCount}/>
          </Col>
          <Col>
            <Songs name="blue" count= {Count} increaseCount={increaseCount} decreaseCount = {decreaseCount}/>
          </Col>
          <Col>
            <Songs name="Chicken" count= {Count} increaseCount={increaseCount} decreaseCount = {decreaseCount}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

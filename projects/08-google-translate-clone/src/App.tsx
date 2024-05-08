import { useReducer } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';

function App() {
  const {fromLanguage, toLanguage, interchangeLanguages, setFromLanguage} = useStore()

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <h2>From</h2>
          {fromLanguage}
        </Col>
        <Col>
          <button disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>Change</button>
        </Col>
        <Col>
          <h2>To</h2>
          {toLanguage}
        </Col>
      </Row>
    </Container>
  )
}

export default App

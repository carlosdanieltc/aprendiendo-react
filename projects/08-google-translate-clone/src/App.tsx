import { useEffect, useReducer } from 'react';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStore } from './hooks/useStore';
import { AUTO_LANGUAGE } from './constants';
import { ArrowsIcon } from './components/Icons';
import { LanguageSelector } from './components/LanguageSelector';
import { SectionType } from './types.d';
import { TextArea } from './components/TextArea';

function App() {
  const { loading, fromLanguage, toLanguage, fromText, result, interchangeLanguages, setFromLanguage, setToLanguage, setFromText, setResult} = useStore()

  // useEffect(() => {
  //   if (debouncedFromText === '') return

  //   translate({ fromLanguage, toLanguage, text: debouncedFromText })
  //     .then(result => {
  //       if (result == null) return
  //       setResult(result)
  //     })
  //     .catch(() => { setResult('Error') })
  // }, [debouncedFromText, fromLanguage, toLanguage])

  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type= {SectionType.From}
              value= {fromLanguage}
              onChange={setFromLanguage}>
            </LanguageSelector>
            <TextArea
              type = {SectionType.From}
              value= {fromText}
              onChange={setFromText}
            ></TextArea>
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='Link' disabled={fromLanguage === AUTO_LANGUAGE} 
          onClick={interchangeLanguages}><ArrowsIcon/></Button>
        </Col>
        <Col>
          <Stack gap={2}>
            <LanguageSelector 
              type= {SectionType.To}
              value={toLanguage}
              onChange={setToLanguage}>
            </LanguageSelector>
            <TextArea
                loading = {loading}
                type = {SectionType.To}
                value= {result}
                onChange={setResult}
              ></TextArea>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App

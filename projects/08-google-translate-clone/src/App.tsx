import { useReducer } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//1. Create a initialState
const initialState = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

//2. Create a reducer
function reducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case 'INTERCHANGE_LANGUAGES':
      return {
        ...state,
        fromLanguage: state.toLanguage,
        toLanguage: state.fromLanguage
      }

    case 'SET_FROM_LANGUAGE':
      return {
        ...state,
        fromLanguage: payload
      }

    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        toLanguage: payload
      }

    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: true,
        fromText: payload,
        result: ''
      }

    case 'SET_RESULT':
      return {
        ...state,
        loading: false,
        result: payload
      }

    default: return state
  }
}

function App() {
  //3. Usar el hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>Google Translate</h1>
    </div>
  )
}

export default App

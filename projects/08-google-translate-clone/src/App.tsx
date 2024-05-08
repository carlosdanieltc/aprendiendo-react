import { useReducer } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Action, State } from './types';

//1. Create a initialState
const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false
}

//2. Create a reducer
function reducer(state: State, action: Action) {
  const { type } = action

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
        fromLanguage: action.payload
      }

    case 'SET_TO_LANGUAGE':
      return {
        ...state,
        toLanguage: action.payload
      }

    case 'SET_FROM_TEXT':
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }

    case 'SET_RESULT':
      return {
        ...state,
        loading: false,
        result: action.payload
      }

    default: return state
  }
}

function App() {
  //3. Usar el hook useReducer
  const [{fromLanguage}, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='App'>
      <h1>Google Translate</h1>
      <button onClick={() => {
        dispatch({type: 'SET_FROM_LANGUAGE', payload: 'es'})
      }}>Cambiar a Español</button>
      {fromLanguage}
    </div>
  )
}

export default App

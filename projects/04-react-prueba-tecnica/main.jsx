import {createRoot} from 'react-dom/client'
import React from 'react'
import {App} from './src/App'

const root = createRoot(document.getElementById('app'))

root.render(<App/>)
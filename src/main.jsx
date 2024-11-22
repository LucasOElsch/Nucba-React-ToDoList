import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './To-Do-List.jsx'

import './To-Do-List.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
)

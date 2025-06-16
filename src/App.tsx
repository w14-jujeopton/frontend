import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom'
import MyPage from './pages/MyPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      
      <Route path='/mypage' element={<MyPage /> } />
      <Route path='/' element={<Home/>} />
    </Routes>
  )
}

export default App

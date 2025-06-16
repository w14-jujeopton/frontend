import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './pages/Post'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom'
import MyPage from './pages/MyPage'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      
      <Route path='/mypage' element={<MyPage /> } />
      <Route path='/' element={<Home/>} />
      <Route path='/post' element={<Post/>} />
    </Routes>
  )
}

export default App
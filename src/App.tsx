import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Board from './pages/Board'
import MyPage from './pages/MyPage'
import Post from './pages/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    // <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/myboard' element={<Board />} />
        <Route path='/mypage' element={<MyPage /> } />
        <Route path='/post' element={<Post />} />
      </Routes>
    // </BrowserRouter>
  )
}

export default App
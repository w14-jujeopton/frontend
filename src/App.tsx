import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './pages/Post'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // 원하는 색상 코드로 변경
    },
    // secondary, error 등도 여기서 설정 가능
  },
});
function App() {
  const [count, setCount] = useState(0)

  return (
    <Post />
  )
}

export default App
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SideChat from './pages/SideChat'
import CentralCommand from './pages/CentralCommand'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/side-chat" element={<SideChat />} />
      <Route path="/central-command" element={<CentralCommand />} />
    </Routes>
  )
}

export default App

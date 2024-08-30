import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import {Home, About, Projects, Contact} from "./pages/index"

function App() {
  const [count, setCount] = useState(0)

  return <main className='bg-slate-300/20'>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>                
      </Routes>
    </Router>
  </main>
}
export default App

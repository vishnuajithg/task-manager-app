// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Home, AddTask, ViewTask} from './pages'
import Header  from './components/Navbar'

function App() {

  return (
    <>
      <Router>
        < Header />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/addTask" element={<AddTask/>} />
          <Route path="/viewTask" element={<ViewTask/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
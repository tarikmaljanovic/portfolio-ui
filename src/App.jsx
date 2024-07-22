import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Project from './pages/project'
import Projects from './pages/projects'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:id' element={<Project />} />
      </Routes>
    </>
  )
}

export default App
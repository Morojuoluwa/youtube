import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Video from './pages/Video'

const App = () => {
  const [sideBar, setSidebar] = useState(true)
  return (
    <div>
      <Navbar setSideBar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Homepage sideBar={sideBar}/>}/>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>
      </Routes>
    </div>
  )
}

export default App
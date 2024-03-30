import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Homepage from './pages/Homepage.jsx'
// import Video from './pages/Video.jsx'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='/' element={<Homepage/>}/>
//       <Route path='/video/:categoryId/:videoId' element={<Video/>}/>

//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    {/* <RouterProvider router={router}/> */}
  </React.StrictMode>
)

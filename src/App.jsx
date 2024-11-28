import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import ViewPaste from './components/ViewPaste'
import Paste from './components/Paste'
import Home from './components/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element:
      <div>
        <NavBar />
        <Home />
      </div>
  },
  {
    path: '/pastes',
    element:
      <div>
        <NavBar />
        <Paste />
      </div>
  },
  {
    path: '/pastes/:id',
    element:
      <div>
        <NavBar />
        <ViewPaste />
      </div>
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

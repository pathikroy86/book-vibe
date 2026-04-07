
import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'


function App() {

  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>

    </>
  )
}

export default App

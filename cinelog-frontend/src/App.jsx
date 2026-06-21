import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import {Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar"
import { MovieProvider } from './context/MovieContext'

function App() {

  return (
    <>
      <MovieProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </MovieProvider>
    </>
  )
}

export default App

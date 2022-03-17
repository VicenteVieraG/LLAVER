import { useState } from "react"
import LogIn from "./components/LogIn"
import Logo from "./components/Logo"
import { Routes, Route, Link } from "react-router-dom";
import Error from "./components/Error"
import RegPacientes from "./components/RegPacientes"

function App() {

  return (
    <div class="bg-[#EEEEEE] h-screen">
        <Logo
        full={true}
      />      
      <Routes>
      <Route path="/RegPacientes" element={<RegPacientes/>} />
      </Routes>
      <LogIn/>
    </div>
  )
}

export default App

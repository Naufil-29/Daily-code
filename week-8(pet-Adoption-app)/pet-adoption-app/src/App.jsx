import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "./components/homePage"
import { useState } from "react"
import { InfoTable } from "./components/InfoTable";

function App() {
  const [petsInfo, setPetsInfo] = useState([]);
  console.log("from app page", petsInfo)
  return( 
    <BrowserRouter>
    <Routes> 
      <Route path="/" element={<HomePage petsInfo={petsInfo} setPetsInfo={setPetsInfo}/>}/>
      <Route path="/info" element={<InfoTable petsInfo={petsInfo}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

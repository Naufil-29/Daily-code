
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import SignUp from './components/Signup'
import SignIn from './components/Signin'
import HomePage from './pages/home'

function App() {
  return(
<BrowserRouter> 
  <Routes> 
    <Route path="/" element={<HomePage/>}/>
  </Routes>
</BrowserRouter>
  )
}

export default App

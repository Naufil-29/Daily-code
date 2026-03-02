
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import SignUp from './components/Signup'
import SignIn from './components/Signin'
import HomePage from './pages/home'
import CoursesPage from './pages/courses'
import AdminPanel from './pages/adminPanel'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import PaymentSuccess from './pages/paymentSuccess'

function App() {
  return(
<BrowserRouter> 
  <Routes> 
    <Route path="/" element={<HomePage/>}/>
    <Route path="/courses" element={<CoursesPage/>}/>
    <Route path="/admin" element={
      <ProtectedAdminRoute> 
        <AdminPanel/>
      </ProtectedAdminRoute>
      }/>
    <Route path="payment-success" element={<PaymentSuccess/>}/>
    <Route path="/payment-cancel" element={<h1>Payment Cancelled ❌</h1>} />
  </Routes>
</BrowserRouter>
  )
}

export default App

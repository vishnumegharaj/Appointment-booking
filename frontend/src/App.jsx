import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import MyProfile from './pages/MyProfile'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Signup from './pages/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App

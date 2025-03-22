import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
// import App from './App.jsx'
import { Homeguest } from './CE/homeguest.jsx'
import { CELogin } from './CE/CELogin.jsx'
import { CEUserProfile } from './CE/CEUserprofile.jsx'
import { Signup } from './CE/Signup.jsx'
import { CEHomePage } from './CE/CEHomePage.jsx'
import { KHome } from './CE/KHome.jsx'
import { Adminuserlist } from './CE/Adminuserlist.jsx'
import { Admincom } from './CE/Admincom.jsx'
import { Complaint } from './CE/Complaint.jsx'
import { Reghome } from './CE/Reghome.jsx'
import { CEComplaintRegisterPopup } from './CE/CEComplaintRegisterPopup.jsx'
import { CEUserHomePage } from './CE/CEUserHomePage.jsx'
import Mycomplaints from './CE/Mycomplaints.jsx'
import ProfileUpdatedPopup from './CE/ProfileUpdatedPopup.jsx'
import Adminfeedback from './CE/adminfeedback.jsx'
import Admindashboard from './CE/Admindashboard.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/homeguest' element={<Homeguest />} />
        <Route path="/" element={<CELogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/userprofile' element={<CEUserProfile />} />
        <Route path='/home' element={<CEHomePage />} />
        <Route path='/khome' element={<KHome />} />
        <Route path='/admin' element={<Adminuserlist />} />
        <Route path='/admincom' element={<Admincom />} />
        <Route path='/complaint' element={<Complaint />} />
        <Route path='/reghome' element={<Reghome />} />
        <Route path='/m1' element={<CEComplaintRegisterPopup />} />
        <Route path='/m2' element={<CEUserHomePage />} />
        <Route path='/complaints' element={<Mycomplaints />} />
        <Route path='/update' element={<ProfileUpdatedPopup />} />
        <Route path='/feedback'element={<Adminfeedback/>}/>
        <Route path='/dash'element={<Admindashboard/>}/>
      </Routes>
    </BrowserRouter>

    {/* <App /> */}
  </StrictMode>

  ,)

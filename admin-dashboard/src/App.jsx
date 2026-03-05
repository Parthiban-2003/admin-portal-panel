import './App.css'
import {Route, Routes} from 'react-router-dom'
import LoginPage from './authentication/LoginPage'
import UserInformations from './pages/UserInformations'
import Register from './authentication/Register'
import UserDisplay from './pages/UserDisplay'
import Dashboard from './dashboard/Dashboard'

function App() {

  return (
    <>
      <div>
          <Routes>
              <Route path='/' element={<LoginPage/>}/>
              <Route path='/register' element={<Register/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path='/UserInformations' element={<UserInformations/>}/>
              <Route path='/UserInformations/:id' element={<UserInformations/>}/>
              <Route path='/UserDisplay' element={<UserDisplay/>} />
          </Routes>
      </div>
    </>
  )
}

export default App

import './App.css'
import {Route, Routes} from 'react-router-dom'
import LoginPage from './authentication/LoginPage'
import UserInformations from './pages/UserInformations'
import Register from './authentication/Register'

function App() {

  return (
    <>
      <div>
          <Routes>
              <Route path='/' element={<LoginPage/>}/>
              <Route path='/register' element={<Register/>} />
              <Route path='/UserInformations' element={<UserInformations/>}/>
          </Routes>
      </div>
    </>
  )
}

export default App

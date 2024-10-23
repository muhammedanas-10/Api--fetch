import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'

import ViewUser from './Components/ViewUser/ViewUser'
import Api from './Api/Api'

function App() {
 

  return (
    <>
      <Header/>
      <br />
      <Routes>
        <Route path='/' element={<Api/>}/>
        <Route path='/viewUser/:id' element={<ViewUser/>}/>
      </Routes>
      <br />
      <Footer/>
    </>
  )
}

export default App

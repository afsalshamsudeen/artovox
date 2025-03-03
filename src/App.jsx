
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BuyCred from './pages/BuyCred'
import Result from './pages/Result'



function App() {
  

  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/buycredits' element={<BuyCred/>}/>
    <Route path='/result' element={<Result/>}/>
  </Routes>
    </>
  )
}

export default App


import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import BuyCred from './pages/BuyCred'
import PromptPage from './pages/PromptPage'
import LoginPage from './pages/LoginPage'
import NavBar from './components/NavBar'
import Footer from './components/Footer'



function App() {
  
  const location = useLocation();

  const hideLayoutRoutes = ['/login']
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
    {!shouldHideLayout && <NavBar/>}
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/buycredits' element={<BuyCred/>}/>
    <Route path='/prompt' element={<PromptPage/>}/>
    <Route path='/login' element= {<LoginPage/>}/>
  </Routes>
    {!shouldHideLayout && <Footer/>}
    </>
  )
}

export default App

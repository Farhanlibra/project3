
import './App.css'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'
import Reviews from './components/Reviews'
import Pricing from './components/Pricing'
import Contact from './components/Contact'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/features' element={<Features/>}/>
        <Route path='/review' element={<Reviews/>}/>
        <Route path='/price' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
       
      </Routes>
      <div className='ft'><Footer/></div>
      
      
      </BrowserRouter>
    
    </>
  )
}

export default App

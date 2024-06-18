import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SingleBlog from './Pages/SingleBlog'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>       
    </>
  )
}

export default App

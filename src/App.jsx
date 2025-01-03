import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import SecondaryNav from './Components/SecondaryNav'
import SingleNews from './Components/SingleNews'
import Footer from './Components/Footer'
import Aos from 'aos'
import 'aos/dist/aos.css';
Aos.init();
function App() {
  return (
    <>
    <BrowserRouter>
    <SecondaryNav/>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/news/:id' element={<SingleNews/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

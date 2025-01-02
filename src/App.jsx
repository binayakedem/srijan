import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import SecondaryNav from './Components/SecondaryNav'
import SingleNews from './Components/SingleNews'
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
    </BrowserRouter>
    </>
  )
}

export default App

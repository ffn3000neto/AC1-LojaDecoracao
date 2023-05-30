import './App.css'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './home'
import Sobre from './sobre'
import Contato from './contato'



function App() {


  return (
    <>
      {/* <BrowserRouter>
    <Routes>

    </Routes>
<Home></Home>
    </BrowserRouter> */}


      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/sobre" element={<Sobre/>}></Route>
            <Route path="/contato" element={<Contato/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )

}

export default App

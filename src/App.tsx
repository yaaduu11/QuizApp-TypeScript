import { BrowserRouter, Route, Routes  } from "react-router-dom";
import './App.css'
import Home from "./pages/home";
import SignIn from "./pages/sign_in";
import Game from './pages/game'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/rules" element={<Home/>}/>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/game" element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

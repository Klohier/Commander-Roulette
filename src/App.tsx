// import Message from './Message';
import Chosen from './pages/Chosen';
import DisplayCard from './components/CardPicker';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
  <>
    <Navbar />
    {/* <h1>Find Your Commander</h1>
    <DisplayCard /> */}
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path="chosen" element={<Chosen />} />

    </Routes>
  
  </>
  
  </BrowserRouter>
  );
}

export default App;
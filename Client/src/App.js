import './App.css';
import { LandingPage } from './Components/LandingPage.jsx'
import {BrowserRouter,Route,Router, Routes} from "react-router-dom" 
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>}/>
        </Routes>
        <Toaster/>
    </BrowserRouter>
    </>
  );
}

export default App;

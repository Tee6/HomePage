import './styles/App.css'
import './styles/glassmorphism.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import DropdownMenu from './components/DropDownMenu';
import ContactBtn from './components/ContactMe';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='top-btns'>
        <DropdownMenu/>
        <ContactBtn/>
      </div>
      <div className='container'>
      <Routes>
          <Route path="/HomePage/" element={<Home />} />
          <Route path="/HomePage/CV" element={<CV />} />
          <Route path="/HomePage/Projects" element={<Projects />} />
          <Route path="/HomePage/Skills" element={<Skills />} />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}
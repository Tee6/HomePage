import './styles/App.css';
import './styles/glassmorphism.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from 'react';
import DropdownMenu from './components/DropDownMenu';
import ContactBtn from './components/ContactMe';

// Dynamische Importe für Code-Splitting
const Home = lazy(() => import("./pages/Home"));
const CV = lazy(() => import("./pages/CV"));
const Projects = lazy(() => import("./pages/Projects"));
const Skills = lazy(() => import("./pages/Skills"));

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className='top-btns' style={{ zIndex: 1 }}>
          <DropdownMenu />
          <ContactBtn />
        </div>
        <div className='container'>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/HomePage/" element={<Home />} />
              <Route path="/HomePage/CV" element={<CV />} />
              <Route path="/HomePage/Projects" element={<Projects />} />
              <Route path="/HomePage/Skills" element={<Skills />} />
              <Route path="*" element={<h1>Not found!</h1>} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </div>
  );
}

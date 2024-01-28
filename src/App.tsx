import './App.css'
import PersonaCard from './components/PersonaCard';
import NavMenu from './components/NavMenu';

function App() {
  const options = ["Option 1", "Option 2", "Option 3"]
  return (
    <>
    <body>
    <div>
      <NavMenu options={options}/>
        <PersonaCard/>
      </div>
    </body>
    </>
  )
}

export default App

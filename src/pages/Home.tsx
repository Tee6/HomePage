import PersonaCard from '../components/PersonaCard';
import DropdownMenu from '../components/DropDownMenu';
import ContactBtn from '../components/ContactMe';

function Home() {
  return (
    <>
    <body>
    <div>
      <DropdownMenu/>
      <ContactBtn/>
        <PersonaCard/>
      </div>
    </body>
    </>
  )
}

export default Home

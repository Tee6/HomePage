import DropdownMenu from '../components/DropDownMenu';
import ContactBtn from '../components/ContactMe';
import CVentryCard from '../components/CV/CVcard';
import useCVStore from '../stores/CVStore';


function CV() {
  const CVentries = useCVStore(CVentries => CVentries.CVentries)
  return (
    <>
    <body>
    <div>
      <DropdownMenu/>
      <ContactBtn/>
      <div className='cv-entries-div'>
      {CVentries.map((entry, index) => (
            <CVentryCard key={index} entry={entry} />
          ))}
      </div>
      </div>
    </body>
    </>
  )
}

export default CV

import CVentryCard from '../components/CV/CVcard';
import useCVStore from '../stores/CVStore';
import '../styles/cvcard.css';
import useStore from '../stores/globalStore';

function CV() {
  useStore.setState({showDropdown: false})
  const CVentries = useCVStore(CVentries => CVentries.CVentries)
  return (
    <>
      <div className='cv-entries-div'>
      {CVentries.map((entry, index) => (
            <CVentryCard key={index} entry={entry} />
      ))}
      </div>
    </>
  )
}

export default CV

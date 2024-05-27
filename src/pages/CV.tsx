/* eslint-disable react-refresh/only-export-components */
import CVentryCard from '../components/CV/CVcard';
import useCVStore from '../stores/CVStore';
import '../styles/cvcard.css';

function CV() {
  const CVentries = useCVStore(CVentries => CVentries.CVentries)
  return (
    <>
    <h1>Arbeitserfahrung</h1>
      <div className='cv-entries-div'>
      {CVentries.map((entry, index) => (
            <CVentryCard key={index} entry={entry} />
      ))}
      </div>
    </>
  )
}

export default CV

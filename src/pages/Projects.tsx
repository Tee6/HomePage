import CVentryCard from '../components/CV/CVcard';
import useCVStore from '../stores/CVStore';
import '../styles/cvcard.css';

function Projects() {
  const ProjectEntries = useCVStore(CVentries => CVentries.ProjectEntries)
  return (
    <>
    <h1>Projekte</h1>
      <div className='cv-entries-div'>
      {ProjectEntries.map((entry, index) => (
            <CVentryCard key={index} entry={entry} />
      ))}
      </div>
    </>
  )
}

export default Projects

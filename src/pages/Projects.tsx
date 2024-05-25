import CVentryCard from '../components/CV/CVcard';
import useCVStore from '../stores/CVStore';
import '../styles/cvcard.css';
import useStore from '../stores/globalStore';

function Projects() {
  useStore.setState({showDropdown: false})
  const ProjectEntries = useCVStore(CVentries => CVentries.ProjectEntries)
  return (
    <>
      <div className='cv-entries-div'>
      {ProjectEntries.map((entry, index) => (
            <CVentryCard key={index} entry={entry} />
      ))}
      </div>
    </>
  )
}

export default Projects

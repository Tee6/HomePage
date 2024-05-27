import { useMemo } from 'react';
import CVentryCard from '../components/CV/CVcard';
import useCVStore from '../stores/CVStore';
import '../styles/cvcard.css';

function Projects() {
  const ProjectEntries = useCVStore(CVentries => CVentries.ProjectEntries);

  const renderedProjectEntries = useMemo(() => {
    return ProjectEntries.map(entry => (
      <CVentryCard key={entry.id} entry={entry} />
    ));
  }, [ProjectEntries]);

  return (
    <>
      <h1>Projekte</h1>
      <div className='cv-entries-div'>
        {renderedProjectEntries}
      </div>
    </>
  );
}

export default Projects;

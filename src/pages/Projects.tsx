import { useMemo } from 'react';
import CVentryCard from '../components/CV/CVcard';
import useCVStore from '../stores/CVStore';
import '../styles/cvcard.css';

function Projects() {
  const projectEntries = useCVStore(state => state.ProjectEntries);

  const renderedProjectEntries = useMemo(() => {
    return projectEntries.map(entry => (
      <CVentryCard key={entry.id} entry={entry} />
    ));
  }, [projectEntries]);

  return (
    <section>
      <h1>Projekte</h1>
      <div className='cv-entries-div'>
        {renderedProjectEntries}
      </div>
    </section>
  );
}

export default Projects;

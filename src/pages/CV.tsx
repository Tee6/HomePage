/* eslint-disable react-refresh/only-export-components */
import { useMemo } from 'react';
import CVentryCard from '../components/CV/CVcard';
import useCVStore from '../stores/CVStore';
import '../styles/cvcard.css';

function CV() {
  const CVentries = useCVStore(state => state.CVentries);

  const renderedCVEntries = useMemo(() => {
    return CVentries.map(entry => (
      <CVentryCard key={entry.id} entry={entry} />
    ));
  }, [CVentries]);

  return (
    <section>
      <h1>Arbeitserfahrung</h1>
      <div className='cv-entries-div'>
        {renderedCVEntries}
      </div>
    </section>
  );
}

export default CV;

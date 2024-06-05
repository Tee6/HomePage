import { useMemo } from 'react';
import useCVStore from '../stores/CVStore';
import '../styles/cvcard.css';
import "../styles/skillcard.css";
import SkillCard from '../components/SkillCard';


function Skills() {
  const skillEntries = useCVStore(state => state.SkillEntries);

  const renderedSkillEntries = useMemo(() => {
    return skillEntries.map(entry => {
      return <SkillCard key={entry.id} entry={entry} />;
    });
  }, [skillEntries]);

  return (
    <section>
      <h1>Skills</h1>
      <div className='cv-entries-div skill-entries-div'>
        {renderedSkillEntries}
      </div>
    </section>
  );
}

export default Skills

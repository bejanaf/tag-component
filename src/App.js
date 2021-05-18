import { useState } from 'react';
import Tags from './Tags';

function App() {
  //2
  const [skills, setSkills] = useState([]);

  //3
  function updateSkills(newSkill) {
    setSkills([...skills, newSkill.toUpperCase()]);
  }

  //1
  return (
    <div>
      <Tags tags={skills} onUpdateTags={updateSkills} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import ProgramList from './components/ProgramList';

const programTypes = ['series', 'movie'];

function App() {

  const [checkedTypes, setCheckedTypes] = useState(['series']);

  const handleCheckbox = (event) => {
    const index = checkedTypes.indexOf(event.target.name);
    if(index > -1){
      setCheckedTypes([...checkedTypes.slice(0, index), ...checkedTypes.slice(index+1, checkedTypes.length+1)]);
    } else {
      setCheckedTypes([...checkedTypes, event.target.name])
    }
  }

  return (
    <div className="Main">
      <form>
        {programTypes.map((programType)=>(
          <div key={programType}>
            {
              checkedTypes.includes(programType)
              ? <input type="checkbox" id={programType} name={programType} onChange={handleCheckbox} defaultChecked />
              : <input type="checkbox" id={programType} name={programType} onChange={handleCheckbox} />
            }
            <label htmlFor={programType}>{programType}</label>
          </div>
        ))}
        
      </form>
      <ProgramList categories={checkedTypes} />
    </div>
  );
}

export default App;

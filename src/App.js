import { useState } from 'react';
import './App.css';
import ProgramList from './components/ProgramList';

const programTypes = ['series', 'movie',];

const sortByIMDbAsc = (programA, programB) => {
  return (programA.imdb?.rating || 0) - (programB.imdb?.rating || 0)
}

const sortByIMDbDesc = (programA, programB) => {
  return (programB.imdb?.rating || 0) - (programA.imdb?.rating || 0)
}

function App() {

  const [checkedTypes, setCheckedTypes] = useState(['series']);
  const [sortingFunction, setSortingFunction] = useState(() => sortByIMDbDesc);

  const handleCategoryCheckbox = (event) => {
    const name = event.target.name
    if(checkedTypes.includes(name)){
      setCheckedTypes(checkedTypes.filter((a) => a !== name))
    } else {
      setCheckedTypes([...checkedTypes, name])
    }
  }

  const handleSortingChange = (event) => {
    const sortingType = event.target.value;
    switch(sortingType){
      case "imdbAsc":
        setSortingFunction(() => sortByIMDbAsc);
        break;
      case "imdbDesc":
        setSortingFunction(() => sortByIMDbDesc);
        break;
      default:
        break;
    }
  }

  return (
    <div className="main">
      <div className="menuContainer">
        <div className="categoriesMenu">
          <div className="categoriesMenuLabel">Categories:</div>
          <form className="categoriesMenuForm">
            {programTypes.map((programType)=>(
              <div key={programType}>
                  {
                    checkedTypes.includes(programType)
                    ? <input className="categoriesMenuInstance" type="checkbox" id={programType} name={programType} onChange={handleCategoryCheckbox} defaultChecked />
                    : <input className="categoriesMenuInstance" type="checkbox" id={programType} name={programType} onChange={handleCategoryCheckbox} />
                  }
                <label htmlFor={programType}>{programType}</label>
              </div>
            ))}
          </form>
        </div>
        <div className="sortingMenu">
          <form>
            <select className="sortingSelect" onChange={handleSortingChange} defaultValue={"imdbDesc"}>
              <option value="imdbAsc">sort by IMDb ascending</option>
              <option value="imdbDesc">sort by IMDb descending</option>
            </select>
          </form>
        </div>
      </div>
      <ProgramList categories={checkedTypes} sortingFunction={sortingFunction} />
    </div>
  );
}

export default App;

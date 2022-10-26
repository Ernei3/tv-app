import './App.css';
import ProgramList from './components/ProgramList';

function App() {
  return (
    <div className="Main">
      My page will be here
      <ProgramList categories={['movie', 'series']} />
    </div>
  );
}

export default App;

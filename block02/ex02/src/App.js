import './App.css';
import Name from './Name';
import Surname from './Surname';

function App() {
  var names=['Nikola','John','Robert','Norbert','Francis'];
  var surnames=['Tesla','Walkers','de Niro','Chouisee','Milkon'];

  let runNames=()=>{
    
  return names.map( (name,idx) => {return <p> <Name name={name}/> <Surname surname={surnames[idx]}/> </p>})

  }
  return (
    <div className="App">
      {runNames()}
    </div>
  );
}

export default App;

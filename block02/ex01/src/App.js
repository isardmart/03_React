import './App.css';
import Child from './Child';

function App() {
  let myName= "Toni";
  return (
    <div className="App">
      <Child name={myName}/>
    </div>
  );
}

export default App;

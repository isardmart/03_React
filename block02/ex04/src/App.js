import './App.css';
import List from './List.js'

function App() {
  var categories =["shirts", "hats", "shoes"];
  return (
    <div className="App">
      {List(categories)}
    </div>
  );
}

export default App;

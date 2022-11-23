import './App.css';
import List from './List.js'

function App() {
  let categories =["shirts", "hats", "shoes"];
  return (
    <div className="App">
      <List categories={categories} />
    </div>
  );
}

export default App;

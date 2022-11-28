import './App.css';
import React, {useState,useEffect} from 'react'
import Input from './Input';
import Value from './Value';

function App() {
  const [eur, setEur] = useState(0);
  const [conversion, setConversion] = useState(0);

  let apiKey = 'your API key here' 

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch(
          `https://api.apilayer.com/currency_data/live?apikey=${apiKey}`
        )
          .then((res) => res.json())
          .then((res) => res);
        setConversion(data.quotes.USDEUR);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Input setEur={setEur}/>
      <Value eur={eur} conversion={conversion}/>
    </div>
  );
}

export default App;


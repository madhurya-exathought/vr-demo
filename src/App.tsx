import React, { useEffect, useState } from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/pages/Home/Home';
import { Constants } from './constants/index';
import {getConfig} from './config/envConfig'
import Button from './components/cta/Button'
function App() {

  const currentEnv =  process.env.REACT_APP_ENV as keyof typeof Constants.ENVIRONMENT;

  const [count, setCount] = useState<number>(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const configForCurrentEnv = getConfig(currentEnv)
  useEffect(() => {
    console.log(configForCurrentEnv.apiUrl);
  }, [configForCurrentEnv]);
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    <h1>Counter: {count}</h1>
      <Button handleClick={increment} buttonText='Increment'/>
      <button onClick={decrement} disabled={count === 0}>Decrement</button>
      
    </div>
    
  );
}

export default App;

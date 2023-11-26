import React, { useState } from 'react';
import './App.css';
import obterMensagem from './api/mensagem';

function App() {
  const mensagem = obterMensagem();

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Olá, Raphael!</h1>
        <p>{mensagem}</p>
        <h1>Contador</h1>
        <p>Contagem: {count}</p>
        <button onClick={decrement}>Remover</button>
        <button onClick={increment}>Adicionar</button>
      </header>
    </div>
  );
}

export default App;
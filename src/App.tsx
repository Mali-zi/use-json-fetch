// import React, { useState } from 'react';
import './App.css';
import { useJsonFetch } from './components/useJsonFetch';

function App() {

  const [data, loading, error] = useJsonFetch('http://localhost:7070/data', 'GET');

  return (
    <div className="App">
      <h1>Кастомный хук useJsonFetch</h1>
      <div>{data}</div>
      <div>{loading}</div>
      <div>{error}</div>
    </div>
  );
}

export default App;

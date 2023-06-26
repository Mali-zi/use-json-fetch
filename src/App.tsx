import React, { useState } from 'react';
import './App.css';
import { useJsonFetch } from './components/useJsonFetch';

function App() {

  const url = 'http://localhost:7070/data';
  const opts = 'GET';
  const {data, loading, error} = useJsonFetch(url, opts);

  

  return (
    <div className="App">
    </div>
  );
}

export default App;

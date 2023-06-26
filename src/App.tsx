import React, { useState } from 'react';
import './App.css';
import { useJsonFetch } from './components/useJsonFetch';

function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState('');


  enum Options { 'data', 'loading', 'error' };

  const {data, loading, error} = useJsonFetch(url, opts);

  data();

  return (
    <div className="App">
    </div>
  );
}

export default App;

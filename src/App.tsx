// import React, { useState } from 'react';
import './App.css';
import RecpComp from './components/RespComp';

function App() {

  return (
    <div className="App">
      <h1>Кастомный хук useJsonFetch</h1>
      <div>
        <RecpComp
          url={'http://localhost:7070/data'}
          metod={'GET'}
        />
        <RecpComp
          url={'http://localhost:7070/loading'}
          metod={'GET'}
        />
        <RecpComp
          url={'http://localhost:7070/error'}
          metod={'GET'}
        />
      </div>
    </div>
  );
}

export default App;

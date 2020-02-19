import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Todos from './containers/Todos/Todos';
function App() {
  return (
    <div>
      <Header />
      <Todos />
    </div>
  );
}

export default App;

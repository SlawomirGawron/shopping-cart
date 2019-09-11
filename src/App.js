import React from 'react';
import MainPage from 'src/components/ShoppingCart/ShoppingCart';

import './App.scss';
import BaseDataInputs from "src/components/BaseDataInputs/BaseDataInputs";
/*
* This application is mostly created using react-bootstrap.
* */
function App() {
  return (
    <div className="App">
        <MainPage />
        <hr />
        <BaseDataInputs />
    </div>
  );
}

export default App;

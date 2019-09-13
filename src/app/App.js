import React from 'react';
import ShoppingCart from 'src/components/ShoppingCart/ShoppingCart';

import 'src/app/App.scss';
import BaseDataInputs from "src/components/BaseDataInputs/BaseDataInputs";
/*
* This application is mostly created using react-bootstrap.
* */
function App() {
  return (
    <div className="main-app">
        <BaseDataInputs />
        <ShoppingCart />
    </div>
  );
}

export default App;

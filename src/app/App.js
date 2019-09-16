import React from 'react';
import ShoppingCart from 'src/components/ShoppingCart/ShoppingCart';
import BaseDataInputs from "src/components/BaseDataInputs/BaseDataInputs";

import 'src/app/App.scss';

function App() {
  return (
    <div className="main-app">
        <BaseDataInputs />
        <ShoppingCart />
    </div>
  );
}

export default App;

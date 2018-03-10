import React from 'react';

import classes from './App.scss';

const App = () => {
  const init = 'Initial stuff';
  return (
    <div>
      <h1 className={classes.heading}>React App starting point</h1>
      <h2>{init}</h2>
    </div>
  );
};

export default App;

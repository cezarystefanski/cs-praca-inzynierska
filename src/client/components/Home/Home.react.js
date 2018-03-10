import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../consts';

import classes from './Home.scss';

const Home = () => {
  const init = 'Initial stuff';
  return (
    <div>
      <h1 className={classes.heading}>React App starting point</h1>
      <h2>{init}</h2>
      <p>
        <Link to={ROUTE_NAMES.example}>Link to examples</Link>
      </p>
    </div>
  );
};

export default Home;

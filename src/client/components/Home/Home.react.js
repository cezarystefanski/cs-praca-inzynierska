import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../constants';
import generateTitle from '../../helpers';

import classes from './Home.scss';

const componentTitle = 'Home';

const Home = () => {
  const init = 'Initial stuff';

  return (
    <div>
      {generateTitle(componentTitle)}
      <h1 className={classes.heading}>React App starting point</h1>
      <h2>{init}</h2>
      <p>
        <Link to={ROUTE_NAMES.example}>Link to examples</Link>
      </p>
    </div>
  );
};

export default Home;

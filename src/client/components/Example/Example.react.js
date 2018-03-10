import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../consts';
import generateTitle from '../../helpers';

import classes from './Example.scss';

const componentTitle = 'Example';

const Example = () => {
  const exampleNum = Math.floor(Math.random() * 500);

  return (
    <div>
      {generateTitle(componentTitle)}
      <p>Example number is <span className={classes.exampleNumber}>{exampleNum}</span></p>
      <Link to={ROUTE_NAMES.home}>Link to home</Link>
    </div>
  );
};

export default Example;

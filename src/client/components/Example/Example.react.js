import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../constants';
import generateTitle from '../../helpers';

import classes from './Example.scss';

const componentTitle = 'Example';

const Example = (props) => {
  const exampleNum = 500;
  const {
    exampleStoreNumber,
    onBindClick,
    onIncreaseClick,
    onDecreaseClick,
  } = props;

  return (
    <div>
      {generateTitle(componentTitle)}
      <p>
        New example number is <span className={classes.exampleNumber}>{exampleNum}</span>
        <button onClick={() => onBindClick(exampleNum)}>Bind to store</button>
      </p>
      <p>
        <small>Store number is <span className={classes.exampleNumber}>{exampleStoreNumber}</span></small>
        <button onClick={onDecreaseClick}>-</button>
        <button onClick={onIncreaseClick}>+</button>
      </p>
      <Link to={ROUTE_NAMES.home}>Link to home</Link>
    </div>
  );
};

const propTypes = {
  exampleStoreNumber: PropTypes.number.isRequired,
  onBindClick: PropTypes.func.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
  onDecreaseClick: PropTypes.func.isRequired,
};

Example.propTypes = propTypes;

export default Example;

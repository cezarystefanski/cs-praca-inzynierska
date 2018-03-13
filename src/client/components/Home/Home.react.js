import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ROUTE_NAMES } from '../../constants';
import generateTitle from '../../helpers';

import classes from './Home.scss';

const componentTitle = 'Home';

class Home extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  componentDidMount() {
    this.props.onHomeVisit();
  }

  render() {
    const init = 'Initial stuff';
    const {
      homeVisits,
      onResetClick,
    } = this.props;

    return (
      <div>
        {generateTitle(componentTitle)}
        <h1 className={classes.heading}>React App starting point</h1>
        <h2>{init}</h2>
        <small>Times homepage was visited: <span className="numHomeVisits">{homeVisits}</span></small>
        <button onClick={onResetClick}>Reset home visits number</button>
        <p>
          <Link to={ROUTE_NAMES.example}>Link to examples</Link>
        </p>
      </div>
    );
  }
}

Home.propTypes = {
  homeVisits: PropTypes.number.isRequired,
  onHomeVisit: PropTypes.func.isRequired,
  onResetClick: PropTypes.func.isRequired,
};

export default Home;

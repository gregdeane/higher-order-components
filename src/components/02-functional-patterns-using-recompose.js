import React from 'react';
import PropTypes from 'prop-types';
import { compose, setDisplayName, setPropTypes } from 'recompose';
const { connect } = Redux();

const enhancedHOC = compose(
  setDisplayName('User'),
  setPropTypes({
    name: PropTypes.string.isRequired,
    status: PropTypes.string
  }),
  connect(),
);

const User = enhancedHOC(({ name, status, dispatch }) =>
  <div
    className="user"
    onClick={() => dispatch({ type: 'USER_SELECTED' })}
  >
    {name}: {status}
  </div>,
);

console.log(User.displayName);

const FunctionalPatternsUsingRecompose = () => (
  <div>
    <User name="Tim" status="active" />
  </div>
);

export default FunctionalPatternsUsingRecompose;

// fake implementation of redux
function Redux() {
  return {
    connect: () => (BaseComponent) => (props) =>
      <BaseComponent
        {...props}
        dispatch={ ({ type }) => console.log(type + ' dispatched') }
      />
  }
}

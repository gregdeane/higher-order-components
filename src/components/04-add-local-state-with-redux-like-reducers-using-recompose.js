import React from 'react';
import { compose, withReducer, withHandlers } from 'recompose';

// `toggledOn`: name of state object
// `dispatch`: dispatch function
// (state, action): reducer
// `false`: initial state value
const withToggle = compose(
  withReducer('toggledOn', 'dispatch', (state, action) => {
    switch (action.type) {
      case 'SHOW':
        return true;
      case 'HIDE':
        return false;
      case 'TOGGLE':
        return !state;
      default:
        return state;
    }
  }, false),
  withHandlers({  // handlers no longer control how the state is modified. the reducers above do that instead.
    show: ({ dispatch }) => (e) => dispatch({ type: 'SHOW' }),
    hide: ({ dispatch }) => (e) => dispatch({ type: 'HIDE' }),
    toggle: ({ dispatch }) => (e) => dispatch({ type: 'TOGGLE' }),
  }),
);

const StatusList = () =>
  <div className="status-list">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

const Status = withToggle(({ status, toggledOn, toggle}) =>
  <span onClick={toggle}>
    {status}
    { toggledOn && <StatusList /> }
  </span>,
);

const Tooltip = withToggle(({ text, children, toggledOn, show, hide }) =>
  <span>
    {
      toggledOn &&
        <span className="tooltip">
          {text}
        </span>
    }
    <span
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      {children}
    </span>
  </span>,
);

const User = ({ name, status }) =>
  <div className="user">
    <Tooltip text="Super!">
      {name}
    </Tooltip>
    : <Status status={status} />
  </div>;

const AddLocalStateWithReduxLikeReducersUsingRecompose = () => (
  <div>
    <User name="Jane" status="active" />
  </div>
);

export default AddLocalStateWithReduxLikeReducersUsingRecompose;

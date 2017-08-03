import React from 'react';
import { compose, flattenProp, withProps } from 'recompose';
const { connect } = ReactRedux();

const mapStateToProps = (state) => ({ user: state.user });

const enhance = compose(
  connect(mapStateToProps),   // first, connect to state and pull out `user`
  flattenProp('user'),        // then, flatten the prop `user`
);

const User = enhance(({ name, status }) =>
  <div className="user"> { name } - { status } </div>
);

const FlattenPropUsingRecompose = () => (
  <div>
    <User />
  </div>
);

export default FlattenPropUsingRecompose;

// Mock Implemenation of ReactRedux connect
function ReactRedux() {
  const state = {
    user: { name: 'Tim', status: 'active' }
  };

  return {
    connect: map => withProps(map(state)),
  };
}


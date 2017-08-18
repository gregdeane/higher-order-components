import React from 'react';
import { compose, lifecycle, branch, renderComponent } from 'recompose';

const User = ({ name, status }) =>
  <div className="user">
    { name } — { status }
  </div>;

const withUserData = lifecycle({
  componentDidMount() {
    fetchData().then(
      users => this.setState({ users }),
      error => this.setState({ error }),
    );
  },
});

const UNAUTHENTICATED = 401;
const UNAUTHORIZED = 403;
const errorMsgs = {
  [UNAUTHENTICATED]: 'Not Authenticated!',
  [UNAUTHORIZED]: 'Not Authorized!',
};

const AuthError = ({ error }) =>
  error.statusCode &&
  <div className="error">{ errorMsgs[error.statusCode] }</div>;

const NoUsersMessage = () =>
  <div>There are no users to display</div>;

const hasErrorCode = ({ error }) => error && error.statusCode;
const hasNoUsers = ({ users }) => users && users.length === 0;

// `states` is an array. this function must return an HOC b/c that's what `compose` (in `enhance` const below) is looking for
// because there are multiple calls to `branch`, they much be wrapped in a `compose` as well (nonOptimalStates)
//
const nonOptimalStates = states =>
  compose(
    // `branch` predicate is `state.when`
    // `map` returns an array but `compose` is expecting ordinal parameters. therefore, use spread (...) on `states`
    ...states.map(state => branch(state.when, renderComponent(state.render))),
  );

const enhance = compose(
  withUserData,
  nonOptimalStates([
    { when: hasErrorCode, render: AuthError },
    { when: hasNoUsers, render: NoUsersMessage },
  ]),
);

const UserList = enhance(({ users }) =>
  <div className="user-list">
    { users && users.map(user => <User key={user.name} {...user} />)}
  </div>,
);

const ShowErrorMessagesForNonOptimalStates = () => (
  <div>
    <UserList />
  </div>
);

export default ShowErrorMessagesForNonOptimalStates;

// Mock Service
const noUsers = [];
const users = [
  { name: 'Tim', status: 'active' },
  { name: 'Bob', status: 'active' },
  { name: 'Joe', status: 'inactive' },
  { name: 'Jim', status: 'pending' },
];

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject({ statusCode: UNAUTHENTICATED });
      // reject({ statusCode: UNAUTHORIZED });
      // resolve(noUsers);
      resolve(users);
    }, 100);
  });
}

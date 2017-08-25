import React from 'react';
import { branch, renderNothing } from 'recompose';

const User = ({ name, status }) =>
  <div className="User">{ name }—{ status }</div>;

// `branch`'s first parameter is a predicate (`userIsNotActive`)
// `renderNothing` is an HOC that always renders null
const userIsNotActive = ({ status }) => status !== 'active';
const hideIfNotActive = branch(userIsNotActive, renderNothing);

const FeaturedUser = hideIfNotActive(({ name, status }) =>
  <div>
    <h3>Today's Featured User</h3>
    <User name={name} status={status} />
    <hr />
  </div>
);

const UserList = ({ users }) =>
  <div className="UserList">
    <h3>All Users</h3>
    { users && users.map((user) => <User key={user.name} {...user} />) }
  </div>;

const users = [
  { name: "Tim", status: "active" },
  { name: "Bob", status: "active" },
  { name: "Joe", status: "inactive" },
  { name: "Jim", status: "pending" },
];

const featured = users[getRandomInt(0, 3)];

const RenderComponentsBasedOnPredicates = () => (
  <div className="user-management">
    <h2>User Management</h2>
    <hr />
    <FeaturedUser name={featured.name} status={featured.status} />
    <UserList users={ users } />
  </div>
);

export default RenderComponentsBasedOnPredicates;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

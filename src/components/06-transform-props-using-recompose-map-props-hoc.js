import React from 'react';
import { mapProps } from 'recompose';

const User = ({ name, status }) =>
  <div key={name} className="user">{ name }—{ status }</div>;

const UserList = ({ users, status }) =>
  <div className="user-list">
    <h3>{ status } users</h3>
    { users && users.map(user => <User key={user.name} {...user} />) }
  </div>;

const users = [
  { name: 'Tim', status: 'active' },
  { name: 'Bob', status: 'active' },
  { name: 'Joe', status: 'pending' },
  { name: 'Jim', status: 'inactive' },
];

// `mapProps` completely blows away any props passed in. if they are not in this object,
// they will not be passed to the wrapped component
const filterByStatus = status => mapProps(({ userList }) => ({
  status,
  users: userList.filter(u => u.status === status),
}));

const ActiveUsers = filterByStatus('active')(UserList);
const InactiveUsers = filterByStatus('inactive')(UserList);
const PendingUsers = filterByStatus('pending')(UserList);

const TransformPropsUsingRecomposeMapPropsHOC = () => (
  <div>
    <ActiveUsers userList={users} />
    <InactiveUsers userList={users} />
    <PendingUsers userList={users} />
  </div>
);

export default TransformPropsUsingRecomposeMapPropsHOC;

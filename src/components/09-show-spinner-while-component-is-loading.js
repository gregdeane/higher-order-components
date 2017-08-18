import React from 'react';
import { compose, lifecycle, branch, renderComponent } from 'recompose';

const withUserData = lifecycle({
  state: { loading: true },
  componentDidMount() {
    fetchData().then(data =>
      this.setState({ loading: false, ...data }));
  },
});

const Spinner = () =>
  <div className="spinner">
    <div className="loader">
      Loading...
    </div>
  </div>;

// this is the "predicate" for the `branch` function below
// the predicate always takes in the components props
const isLoading = ({ loading }) => loading;

// `branch` is similar to an if/then statement
const withSpinnerWhileLoading = branch(
  isLoading,    // this is the "predicate." if it's true, render the second parameter (`renderComponent`).
                // otherwise, render third parameter. The third parameter is optional. If it's not supplied,
                // `branch` will fallback to supplying the wrapped component.
  renderComponent(Spinner),
);

// compose both `withUserData` and `withSpinnerWhileLoading` HOCs into a single HOC
const enhance = compose(
  withUserData,
  withSpinnerWhileLoading,
);

const User = enhance(({ name, status }) =>
  <div className="user">
    {name} - {status}
  </div>,
);

const ShowSpinnerWhileComponentIsLoading = () => (
  <div>
    <User />
  </div>
);

export default ShowSpinnerWhileComponentIsLoading;

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({
      name: 'Julie',
      status: 'active',
    }), 1500);
  });
}

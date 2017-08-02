import React from 'react';
import { compose, lifecycle } from 'recompose';

// by placing this call outside of the HOC, no matter how many components use the HOC,
// the network call (e.g. `fetchConfiguration()`) will only be made once.
const configPromise = fetchConfiguration();

// this is essentially an escape hatch to the full React.createClass api
// except for the `render` method (which is not allowed)
// the point of this `withConfig` HOC is to fetch a configuration
const withConfig = lifecycle({
  state: {
    config: {}
  },
  componentDidMount() {
    // it's important to note that anytime you use `setState` inside a `lifecycle`, the state
    // gets converted to props when it gets passed in to the wrapped component
    configPromise.then(config => this.setState({ config }));
  },
});

const User = withConfig(({ name, status, config }) =>
  <div className="user">
    { name }
    { config.showStatus && `—${status}` }
    { config.canDeleteUsers && <button>X</button> }
  </div>
);

const AddLifecycleHooksToFunctionalStatelessComponent = () => (
  <div>
    <User
      name="Jim"
      status="active"
    />
  </div>
);

export default AddLifecycleHooksToFunctionalStatelessComponent;

// mock config
const config = {
  showStatus: true,
  canDeleteUsers: true,
};

function fetchConfiguration() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(config), 300);
  });
}

import React, { Component } from 'react';

const functionalStatelessHOC = overrideProps => BaseComponent => props =>
  <BaseComponent {...props} {...overrideProps} />;

const lifecycleHookHOC = BaseComponent =>
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  };

const User = ({ name }) =>
  <div className="user">{name}</div>;

const alwaysBob = functionalStatelessHOC({ name: 'Bob' });
const User2 = alwaysBob(User);

const User3 = lifecycleHookHOC(User);

const HigherOrderComponentFromScratch = () => (
  <div>
    <User name="Sarah" />
    <User2 name="Tim" />
    <User3 name="Jessica" />
  </div>
);

export default HigherOrderComponentFromScratch;

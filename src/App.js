import React from 'react';

import HigherOrderComponentFromScratch from './components/01-write-a-higher-order-component-from-scratch';
import FunctionalPatternsUsingRecompose from './components/02-functional-patterns-using-recompose';
import AddLocalStateToFunctionalComponents from './components/03-add-local-state-to-functional-components';
import AddLocalStateWithReduxLikeReducersUsingRecompose from './components/04-add-local-state-with-redux-like-reducers-using-recompose';
import AddLifecycleHooksToFunctionalStatelessComponent from './components/05-add-lifecycle-hooks-to-functional-stateless-component';
import TransformPropsUsingRecomposeMapPropsHOC from './components/06-transform-props-using-recompose-map-props-hoc';
import LockPropsByUsingWithProps from './components/07-lock-props-by-using-with-props';
import FlattenPropUsingRecompose from './components/08-flatten-prop-using-recompose';
import ShowSpinnerWhileComponentIsLoading from './components/09-show-spinner-while-component-is-loading';

const App = () => (
  <div className="app">
    <HigherOrderComponentFromScratch />
    <FunctionalPatternsUsingRecompose />
    <AddLocalStateToFunctionalComponents />
    <AddLocalStateWithReduxLikeReducersUsingRecompose />
    <AddLifecycleHooksToFunctionalStatelessComponent />
    <TransformPropsUsingRecomposeMapPropsHOC />
    <LockPropsByUsingWithProps />
    <FlattenPropUsingRecompose />
    <ShowSpinnerWhileComponentIsLoading />
  </div>
);

export default App;

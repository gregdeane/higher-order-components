import React from 'react';

import HigherOrderComponentFromScratch from './components/01-write-a-higher-order-component-from-scratch';
import FunctionalPatternsUsingRecompose from './components/02-functional-patterns-using-recompose';
import AddLocalStateToFunctionalComponents from './components/03-add-local-state-to-functional-components';
import AddLocalStateWithReduxLikeReducersUsingRecompose from './components/04-add-local-state-with-redux-like-reducers-using-recompose';
import AddLifecycleHooksToFunctionalStatelessComponent from './components/05-add-lifecycle-hooks-to-functional-stateless-component';
import TransformPropsUsingRecomposeMapPropsHOC from './components/06-transform-props-using-recompose-map-props-hoc';

const App = () => (
  <div className="app">
    <HigherOrderComponentFromScratch />
    <FunctionalPatternsUsingRecompose />
    <AddLocalStateToFunctionalComponents />
    <AddLocalStateWithReduxLikeReducersUsingRecompose />
    <AddLifecycleHooksToFunctionalStatelessComponent />
    <TransformPropsUsingRecomposeMapPropsHOC />
  </div>
);

export default App;

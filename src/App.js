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
import ShowErrorMessagesForNonOptimalStates from './components/10-show-error-messages-for-non-optimal-states';
import RenderComponentsBasedOnPredicates from './components/11-render-components-based-on-predicates';
import SetHtmlTagOfComponentViaProp from './components/12-set-html-tag-of-component-via-prop';

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
    <ShowErrorMessagesForNonOptimalStates />
    <RenderComponentsBasedOnPredicates />
    <SetHtmlTagOfComponentViaProp />
  </div>
);

export default App;

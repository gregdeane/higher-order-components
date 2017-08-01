import React from 'react';

import HigherOrderComponentFromScratch from './components/01-write-a-higher-order-component-from-scratch';
import FunctionalPatternsUsingRecompose from './components/02-functional-patterns-using-recompose';
import AddLocalStateToFunctionalComponents from './components/03-add-local-state-to-functional-components';

const App = () => (
  <div className="app">
    <HigherOrderComponentFromScratch />
    <FunctionalPatternsUsingRecompose />
    <AddLocalStateToFunctionalComponents />
  </div>
);

export default App;

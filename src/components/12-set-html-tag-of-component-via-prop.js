import React from 'react';
import { compose, componentFromProp, withProps } from 'recompose';

const goToPage2 = () => {
  window.location = '#/page2';
};

// `componentFromProp` (below) is not an HOC. It technically returns a component but you don't pass it a component
// instead, you pass the name of the prop that you'd like to build the component from.
const Link = compose(
  withProps(({ type = 'a', to = '#' }) =>
    type === 'a' ?
      { type, href: to } :
      { type, onClick() { window.location = to; } }
  ),
)(componentFromProp('type'));   // apply all of the above to a component (e.g. `componentFromProp`)

const SetHtmlTagOfComponentViaProp = () => (
  <div>
    <a href="#/page1">
      Anchor Link
    </a>
    <button onClick={goToPage2}>
      Button Link
    </button>
    <Link to="#/page1">Anchor</Link>
    <Link to="#/page2" type="button">
      Button Link
    </Link>
  </div>
);

export default SetHtmlTagOfComponentViaProp;

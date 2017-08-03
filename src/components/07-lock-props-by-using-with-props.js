import React from 'react';
import { withProps } from 'recompose';

// the text in the <Component /> links below still appears because `withProps` does not destroy the
// props that were passed in. Instead, it merges the supplied props with any props that may have been
// passed in. This includes the prop `children`.
const HomeLink = withProps(({ query }) => ({ href: `#/?query=${query}` }))('a');
const ProductsLink = withProps({ href: '#/products' })('a');
const CheckoutLink = withProps({ href: '#/checkout' })('a');

const LockPropsByUsingWithProps = () => (
  <div>
    <header>
      <HomeLink query="logo">
        Logo
      </HomeLink>
    </header>
    <nav>
      <HomeLink>
        Home
      </HomeLink>
      <ProductsLink>
        Products
      </ProductsLink>
      <CheckoutLink>
        Checkout
      </CheckoutLink>
    </nav>
  </div>
);

export default LockPropsByUsingWithProps;


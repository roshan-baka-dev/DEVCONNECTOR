import React, { Fragment } from 'react';
import Spinner from './spinner.gif';

export default () => (
  <Fragment>
    <img
      src={Spinner}
      style={{ width: '50px', margin: 'auto', display: 'block' }}
      alt='loading....'
    />
  </Fragment>
);

// export default Spinner

import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../../shared/views/home';

ReactDOM.hydrate(
  <div>
    asd <Home />
  </div>,
  document.getElementById('root'),
);

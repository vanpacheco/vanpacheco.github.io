import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';

import App from './App';

WebFont.load({
  google: {
    families: ['Asap', 'Open Sans', 'Pacifico']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

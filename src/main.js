import React from 'react';
import { render } from 'react-dom';

import App from 'js/app';

import 'scss/core';

var root = document.getElementById('root');

render(
    <App />,
    root
);

if(module.hot) {
    module.hot.accept();
}

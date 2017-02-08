import React from 'react';
import { render } from 'react-dom';
// import $ from 'jquery';

import App from 'js/app';

import 'scss/core';

var root = document.getElementById('root');
// var root = $('#root')[0];

render(
    <App />,
    root
);

if(module.hot) {
    module.hot.accept();
}

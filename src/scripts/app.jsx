var HousedroidConsole = require('./components/HousedroidConsole');
var React = require('react');
window.React = React;

// touch is supported :-)
React.initializeTouchEvents(true);

React.render(
    <HousedroidConsole />,
    document.querySelector('#housedroid-console')
);
'use strict';

var toggleApp = {
  title: 'Visibility Toggle',
  sentence: 'Hey. There are some details you can now see!'
};

var onToggle = function onToggle() {
  visibility = !visibility;
  template();
};

var visibility = false;

var template = function template() {
  var toggleSwitch = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      toggleApp.title
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'p',
      null,
      toggleApp.sentence
    )
  );
  ReactDOM.render(toggleSwitch, appRoot);
};

var appRoot = document.getElementById('app');

template();

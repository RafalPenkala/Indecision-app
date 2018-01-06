'use strict';

var toggleApp = {
  title: 'Visibility Toggle',
  buttonShow: 'Show details',
  buttonHide: 'Hide details',
  sentence: 'Hej. There are some details you can now see!'
};

var onToggle = function onToggle() {
  var showSentence = template();
};

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
      toggleApp.buttonShow
    )
  );
  ReactDOM.render(toggleSwitch, appRoot);
};

var appRoot = document.getElementById('app');

template();

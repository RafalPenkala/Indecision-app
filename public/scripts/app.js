'use strict';

var app = {
  subtitle: 'Welcome to our',
  subtitle2: 'HOTEL',
  subtitle3: 'or HOSTEL, who cares ;)',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderAddForm();
  }
};

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  renderAddForm();
};

var renderAddForm = function renderAddForm() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.subtitle
    ),
    app.subtitle2 && React.createElement(
      'p',
      null,
      app.subtitle2
    ),
    React.createElement(
      'p',
      null,
      app.subtitle3
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are some options' : 'No options!'
    ),
    React.createElement(
      'button',
      { onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: onRemoveAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');

renderAddForm();

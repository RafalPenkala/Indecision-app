const toggleApp = {
  title: 'Visibility Toggle',
  buttonShow: 'Show details',
  buttonHide: 'Hide details',
  sentence: 'Hej. There are some details you can now see!'
};

const onToggle = () => {
 const showSentence =

  template();
};

const template = () => {
  const toggleSwitch = (
    <div>
      <h1>{toggleApp.title}</h1>
      <button onClick={onToggle}>{toggleApp.buttonShow}</button>
    </div>
  );
  ReactDOM.render(toggleSwitch, appRoot);
};

const appRoot = document.getElementById('app');

template();



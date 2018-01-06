const toggleApp = {
  title: 'Visibility Toggle',
  sentence: 'Hey. There are some details you can now see!'
};

const onToggle = () => {
  visibility = !visibility;
    template();
};

let visibility = false;

const template = () => {
  const toggleSwitch = (
    <div>
      <h1>{toggleApp.title}</h1>
      <button onClick={onToggle}>
        {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (
        <p>{toggleApp.sentence}</p>
      )}
    </div>
  );
  ReactDOM.render(toggleSwitch, appRoot);
};

const appRoot = document.getElementById('app');

template();



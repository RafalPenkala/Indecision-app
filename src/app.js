const app = {
  subtitle: 'Welcome to our',
  subtitle2: 'HOTEL',
  subtitle3: 'or HOSTEL, who cares ;)',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderAddForm();
  }
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const onRemoveAll = () => {
  app.options = [];
  renderAddForm();
};

const renderAddForm = () => {
  const template = (
    <div>
      <h1>{app.subtitle}</h1>
      {app.subtitle2 && <p>{app.subtitle2}</p>}
      <p>{app.subtitle3}</p>
      <p>{app.options.length > 0 ? 'Here are some options' : 'No options!'}</p>
      <button onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option'/>
        <button>Add option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');

renderAddForm();



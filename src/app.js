class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this); 
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing five']
    }
  }
handleDeleteOptions() {
  this.setState(() => {
    return {
      options: []
    };
  });
}

handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
}

handleAddOption(option) {
  console.log(option);
}



  render() {
    const title = 'Indecision';
    const subtitle = 'What is subtitle?';
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action 
        hasOptions={this.state.options.length > 0}
        handlePick={this.handlePick}
        />
        <Options 
        options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption 
         handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}


class Header extends React.Component {
  render() {
    return (
    <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subtitle}</h2>
    </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
    <div>
      <button 
      onClick={this.props.handlePick}
      disabled={!this.props.hasOptions}
      >
      What should I do?
      </button>
    </div>
    )
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove all</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
    <div>
      {this.props.optionText}
    </div>
    )
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e){
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    
    if(option)
    this.props.handleAddOption(option);
    // e.target.elements.option.value = '';    
  }

  render() {
    return (
      <div>
        <form 
        onSubmit={this.handleAddOption}
        >
          <input type='text' name='option'></input>
          <button >Add option</button>        
        </form>
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp/>, document.getElementById('app')
);
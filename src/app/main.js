import React, {Component} from 'react';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      gif: '',
      name: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleResetState = this.handleResetState.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({gif: ''});

    fetch('https://yesno.wtf/api?force=yes')
      .then(result => result.json())
      .then(data => {
        this.setState({gif: data.image});
      })
      .catch(console.error);
  }

  handleInputChange(e) {
    this.setState({name: e.target.value});
  }

  handleResetState() {
    this.setState({name: '', gif: ''});
  }

  render() {
    return (
      <div>
        {this.state.gif ? null : <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Как тебя зовут?</label>
          <input id="name" type="text" onChange={this.handleInputChange}/>
          <button>Пройти тест</button>
        </form>}

        {this.state.gif ?
          <div>
            <img src={this.state.gif}/>
            <p>{this.state.name} - пидор!</p>
            <p>Сомневаешься в результатах? Пройди тест еще раз!</p>
            <button onClick={this.handleResetState}>Пройти еще раз</button>
          </div> :
          null}

      </div>
    );
  }
}

export default Main;

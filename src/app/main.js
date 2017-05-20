import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardMedia, CardActions, CardText, CardTitle} from 'material-ui/Card';

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
    const formTemplate = (
      <div className="form-container">
        <h1>Уникальный тест на пидора. 100% результат</h1>
        <form onSubmit={this.handleSubmit}>
          <p>
            <TextField onChange={this.handleInputChange} required floatingLabelText="Как тебя зовут?"/>
            <RaisedButton type="submit" label="Пройти тест"/>
          </p>
        </form>
      </div>
    );

    return (
      <div className="container">
        <div className="main-content">
          {this.state.gif ? null : formTemplate}

          {this.state.gif ?
            <Card>
              <CardMedia>
                <img src={this.state.gif}/>
              </CardMedia>

              <CardTitle title={`${this.state.name} - пидор!`}/>
              <CardText>
                Сомневаешься в результатах? Пройди тест еще раз!
              </CardText>

              <CardActions>
                <RaisedButton onTouchTap={this.handleResetState} label="Пройти еще раз"/>
              </CardActions>
            </Card> :
            null}
        </div>

        <footer className="footer">
          Предложи друзьям пройти тест, а то мало ли:
        </footer>

      </div>
    );
  }
}

export default Main;

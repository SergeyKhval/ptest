import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardMedia, CardActions, CardText, CardTitle} from 'material-ui/Card';
import {ShareButtons, generateShareIcon} from 'react-share';

const {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  TelegramShareButton,
  VKShareButton,
  OKShareButton
} = ShareButtons;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const GooglePlusIcon = generateShareIcon('google');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');

const url = 'http://test-na-pidora.com';
const shareIconProps = {
  round: true,
  size: 32
};

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
          <div className="social-container">
            <FacebookShareButton url={url}>
              <FacebookIcon {...shareIconProps}/>
            </FacebookShareButton>
            <GooglePlusShareButton url={url}>
              <GooglePlusIcon {...shareIconProps}/>
            </GooglePlusShareButton>
            <TwitterShareButton url={url}>
              <TwitterIcon {...shareIconProps}/>
            </TwitterShareButton>
            <VKShareButton url={url}>
              <VKIcon {...shareIconProps}/>
            </VKShareButton>
            <OKShareButton url={url}>
              <OKIcon {...shareIconProps}/>
            </OKShareButton>
            <TelegramShareButton url={url}>
              <TelegramIcon {...shareIconProps}/>
            </TelegramShareButton>
          </div>
        </footer>

      </div>
    );
  }
}

export default Main;

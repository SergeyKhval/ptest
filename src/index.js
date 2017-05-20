import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './app/main';
import './index.scss';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Main/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

import React, { Component } from 'react';
import './App.css';
import "./writingView.css";
import "./firstScreen.css";
import WritingView from './writingView';
import FirstScreen from './firstScreen';
import "./all.js";


class App extends Component {
  state = {
    writingOn: false, //is the writing page displayed?
    dimmerOn: false, //is the dim page displayed?
    firstScreen: true, //is the first page displayed?
  }

  changeWritingState = () => {
    this.setState({firstScreen: false, writingOn: true}, () => {
    })
  }

  dimScreenHandler = () => {
    this.setState({dimmerOn: true}) //dimmer screen fades in
    setTimeout(() => {
      this.changeWritingState();
    }, 5000) //after 5 seconds
    setTimeout(() => {
      this.setState({dimmerOn: false}, () => {
      })
    }, 15000) //this turns the dimmer off immediately after the fade is done
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="content-wrap">
            <h1>The Other Four</h1>
          </div>
        </header>
        <div className="main">

          {this.state.dimmerOn ? <div className="dimScreenFullPage"></div> : null}


          {this.state.firstScreen ? <FirstScreen
            dimfirst={this.dimScreenHandler}
            writefirst={this.changeWritingState} /> : null}
          {this.state.writingOn ? <WritingView /> : null}
        </div>
        <footer>
          <div className="content-wrap">
            <a href="mailto:nikki@nikkster.tech">
              <i className="fa fa-envelope fa-fw"></i>
            </a>
            <a href="https://www.nikkster.tech">nikkster.tech</a>
            <a href="http://www.twitter.com/nikksterdottech">
              <i className="fab fa-twitter fa-fw"></i>
            </a>
          </div>
        </footer>

      </div>
    )
  }
};

// <ReactCSSTransitionGroup
// // return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
//     // {React.cloneElement(this.props.children,
//     // {key:this.props.location.pathname})}
//   transitionName="dimScreenFullPage"
//   transitionEnterTimeout={500}
//   transitionLeaveTimeout={300}>
//
//   {this.state.dimmerOn ? <DimScreen /> : null}
//   // <DimScreen />
// </ReactCSSTransitionGroup>

// {this.state.dimmerOn ? <DimScreen /> : null}






export default App;

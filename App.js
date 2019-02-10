import React, { Component } from 'react';
import './App.css';
import WritingView from './writingView';
import FirstScreen from './firstScreen';
import DimScreen from './dimScreen';


class App extends Component {
  state = {
    writingOn: false, //is the writing page displayed?
    dimmerOn: false, //is the dim page displayed?
    firstScreen: true, //is the first page displayed?
  }

  changeWritingState = () => {
    // console.log("******************")
    // console.log("changeWritingState called, firstScreen: " + this.state.firstScreen + ", writingOn: " + this.state.writingOn + ", dimmeron: " + this.state.dimmerOn + ", inputtext: " + this.state.inputText )
    this.setState({firstScreen: false, writingOn: true}, () => {
      console.log("changeWritingState done, firstScreen: " + this.state.firstScreen + ", writingOn: " + this.state.writingOn + ", dimmeron: " + this.state.dimmerOn + ", inputtext: " + this.state.inputText )
    })
  }

  dimScreenHandler = () => {
    // console.log("******************")
    // console.log("dimScreenHandler starts, firstScreen: " + this.state.firstScreen + ", writingOn: " + this.state.writingOn + ", dimmeron: " + this.state.dimmerOn + ", inputtext: " + this.state.inputText )
    this.setState({dimmerOn: true}) //dimmer screen fades in
    setTimeout(() => {
      this.changeWritingState();
    }, 5000) //after 5 seconds
    setTimeout(() => {
      this.setState({dimmerOn: false}, () => {
        console.log("dimScreenHandler done, firstScreen: " + this.state.firstScreen + ", writingOn: " + this.state.writingOn + ", dimmeron: " + this.state.dimmerOn + ", inputtext: " + this.state.inputText )
      })
    }, 7000) //this turns the dimmer off immediately after the fade is done
  }


  // inputTextHandler = (event) => {
  //   console.log("******************")
  //   console.log("inputTextHandler called, firstScreen: " + this.state.firstScreen + ", writingOn: " + this.state.writingOn + ", dimmeron: " + this.state.dimmerOn + ", inputtext: " + this.state.inputText )
  //   alert('the value is '+ this.input.value);
  //   event.preventDefault();
  //   console.log("inputTextHandler done, firstScreen: " + this.state.firstScreen + ", writingOn: " + this.state.writingOn + ", dimmeron: " + this.state.dimmerOn + ", inputtext: " + this.state.inputText )
  // }
  //
  // inputTextStateHandler = (event) => {
  //   console.log("******************")
  //   console.log("inputTextSTATEHandler called, firstScreen: " + this.state.firstScreen + ", writingOn: " + this.state.writingOn + ", dimmeron: " + this.state.dimmerOn + ", inputtext: " + this.state.inputText )
  //   this.setState({inputText: event.target.value})
  //   this.inputTextHandler();
  //   console.log("inputTextSTATEHandler done, firstScreen: " + this.state.firstScreen + ", writingOn: " + this.state.writingOn + ", dimmeron: " + this.state.dimmerOn + ", inputtext: " + this.state.inputText )
  // }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h3>The Other Four</h3>
        </header>

        <div className="fade">
          {this.state.dimmerOn ? <DimScreen /> : null}
        </div>

        {this.state.firstScreen ? <FirstScreen
          dimfirst={this.dimScreenHandler}
          writefirst={this.changeWritingState} /> : null}
        {this.state.writingOn ? <WritingView /> : null}

        <footer>
          <a href="mailto:nikki@nikkster.tech">
            <i className="fa fa-envelope fa-fw"></i>
          </a>
          <a href="https://www.nikkster.tech">nikkster.tech</a>
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

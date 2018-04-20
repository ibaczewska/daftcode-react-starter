import { hot } from 'react-hot-loader';
import * as React from 'react';
import Home from './view/Home';
import Input from './components/Input';
import Button from './components/Button';
import Display from './components/Display';
import Clock from './components/Clock';


import './styles/theme.sass';

Object.prototype.toMinSec = function () {
  var sec_num = parseInt(this, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

 
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return minutes+':'+seconds;
}


class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      startState: '',
      stopState: '',
      currentState: '',
      isPaused: false,
      startStopButton: 'Start',
      restartButton: 'Restart',
      displayedTimer: '00:00',
      message: 'Go!',
      buttonClass: 'btn-info'
    };

    
    this.toHHMMSS = this.toMinSec.bind(this);
  }

  handleChangeFrom = (event) => {
    this.setState({startState: Number(event.target.value)});
  }
  handleChangeTo = (event) => {
    this.setState({stopState: Number(event.target.value)});
  }

  restartTimer = () => {
    clearInterval(this.intervalId);
    this.setState({isPaused: !this.state.isPaused});
    this.setState({currentState: this.state.startState});
    this.setState({displayedTimer: '00:00'});
    this.setState({startStopButton: 'Start'});
    this.setState({buttonClass:'btn-info'});
    this.setState({message:'Restart timer successful'});
  }

  startStopTimer = () => {
    if (this.state.startState === '') {
      this.setState({message: 'Please, write a start value'})
      return;
    }
    if(this.state.stopState === '') {
      this.setState({message: 'Please, write a stop value'})
      return;
    }
    if(this.state.currentState === '') {
      this.setState({currentState: this.state.startState});
      this.setState({buttonClass:'btn-danger'});
    }

    this.setState({isPaused: !this.state.isPaused})
    if(this.state.isPaused === false) {
      this.setState({startStopButton: 'Stop'})
      this.setState({message: 'Timer is running'});
      this.setState({buttonClass:'btn-danger'});
      
      this.intervalId = setInterval(function() {
        if(this.state.currentState < this.state.stopState) {
          this.setState({
            currentState: Number(this.state.currentState) + 1
          });
          this.setState({
            displayedTimer: this.state.currentState.toMinSec() 
          });
        } else if (this.state.currentState > this.state.stopState) {
          this.setState({
            currentState: Number(this.state.currentState) -1
          });
          this.setState({
            displayedTimer: this.state.currentState.toMinSec() 
          });
        } else {
          this.setState({message: 'Finished!'});
          return;
        }
      }.bind(this), 1000);
      } else {
      clearInterval(this.intervalId);
      this.setState({startStopButton: 'Start'})
      this.setState({message: 'Timer stopped'});
      this.setState({buttonClass:'btn-info'});
  }
}
  
  render() {
   
    const { startState, stopState,  startStopButton, restartButton, displayedTimer, message, buttonClass } = this.state;
 
    return (
      
      <main>
        <Clock/>
        <Home username="DaftCoder" />
        <div className="container">
            <div className="row">
              <Input inputLabelText='from' inputPlaceholder='start value' inputValue={startState} inputFunction={this.handleChangeFrom} />
            </div>
            <div className="row">
              <Input inputLabelText='to' inputPlaceholder='stop value' inputValue={stopState} inputFunction={this.handleChangeTo} />
            </div>
            <div className="btn-group col-md-offset-5" style={{marginTop: '20px'}}>
              <Button buttonClass={buttonClass} buttonText={startStopButton} buttonFunction={this.startStopTimer} />
              <Button buttonClass='btn-warning' buttonText={restartButton} buttonFunction={this.restartTimer} />
            </div>
          <div className="row">
            <Display timerDisplay={displayedTimer} message={message}/>           
          </div>
        </div>
      </main>
      
    );
  }
}

export default hot(module)(App);

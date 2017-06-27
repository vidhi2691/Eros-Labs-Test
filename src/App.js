import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressComp from './ProgressComp';

class App extends Component {
  state={
    percentageValue:'',
    progress:''
  }
  handleChange = (e) => {
    this.setState({ percentageValue: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ 
      progress: this.state.percentageValue
    }
    )
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Progress Bar in React</h2>
        </div>
        <br/>
        <br/>
        <div className="App-intro">
        <ProgressComp progress={this.state.progress} />
        </div>
        <br/>
        <br/>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.percentageValue} onChange={this.handleChange} />
          <br/> <br/>
          <button className="btn btn-primary">Submit</button>
        </form>

      </div>
    );
  }
}

export default App;

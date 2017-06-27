import React, { Component } from 'react';
import Progress from 'react-progressbar';
 
class ProgressComp extends React.Component {
  render () {
    return (
      <div>
        <Progress completed={this.props.progress} />
      </div>
    )
  }
}

export default ProgressComp;

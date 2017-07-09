import React, { Component, PropTypes } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';

import * as actions from '../actions';

const propTypes = {
};

const defaultProps = {
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.setRandomColor = this.setRandomColor.bind(this);
  }

  setRandomColor() {
    const color = [
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200)
    ]
    this.props.handleSetColor(color);
  }

  render() {
    const color = this.props.color;
    const number = this.props.number;
    const style = {
      background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
    };
    const style1 = {
      background: 'rgb(233, 233, 233)'
    }
    console.log(1, style)
    console.log(2, style1)
    return (
      <div style={style1}>
        <Value number={this.props.number} />
        <Control
          onPlus={this.props.handleIncrement}
          onSubtract={this.props.handleDecrement}
          onRandomizeColor={this.setRandomColor}
          />
      </div>
    );
  }
}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;

const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleIncrement: () => {dispatch(actions.increment())},
    handleDecrement: () => {dispatch(actions.decrement())},
    handleSetColor: (color) => {dispatch(actions.setColor(color))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

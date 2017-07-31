import React, { Component } from 'react';
import Buttons from './Buttons';
import CounterList from './CounterList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getRandomColor } from '../utils';
import CounterListContainer from '../containers/CounterListContainer';

class App extends Component {
  render() {
    const {onCreate, onRemove} = this.props;
    return (
      <div className="App">
        App
        <Buttons
          onCreate={onCreate}
          onRemove={onRemove}
        />
        <CounterListContainer />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  onCreate: () => dispatch(actions.create(getRandomColor())),
  onRemove: () => dispatch(actions.remove())
})


export default connect(null, mapDispatchToProps)(App);

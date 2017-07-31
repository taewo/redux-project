import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import './CounterList.css';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor, onDelete}) => {

  const counterList = counters.map((counter, i) => {
    console.log(1, counters)
    return (
      <Counter
        key={i}
        index={i}
        {...counter}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onSetColor={onSetColor}
        onDelete={onDelete}
      />
    )
  })

  return (
    <div className="CounterList">
      {counterList}
    </div>
  )
}
//
// CounterList.propTypes = {
//     counters: PropTypes.arrayOf(PropTypes.shape({
//         color: PropTypes.string,
//         number: PropTypes.number
//     })),
//     onIncrement: PropTypes.func,
//     onDecrement: PropTypes.func,
//     onSetColor: PropTypes.func
// };

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}


export default CounterList;

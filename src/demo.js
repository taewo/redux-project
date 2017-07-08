// action type

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_COLOR = 'SET_COLOR';

// action 생성자

import * as types from './ActionTypes';

export function increment(){
  return {
    type: types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}

export function setColor(color) {
  return {
    type: types.SET_COLOR,
    color
  }
}

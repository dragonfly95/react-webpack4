babel --presets react, es2015 src --out-dir build


babel --presets react src --out-dir build






imr [Import React]
import React from 'react';

imrc [Import React Component]
import React, { Component } from 'react';



slr [Stateless Component Return]
const $1 = () => {
  return (
    $2
  );
}
export default $1;


rrd [Redux Reducer]
export default (state = $1, action) => {
  switch (action.type) {
    case $2:
      $3
    default:
      return state;
  }
};








import React, { Component } from 'react';

class ClockSvg extends Component {

  render() {
    return (
      <svg className="icon-clock" width="14" height="14" id="clock-icon" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1024 544v448q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-352q0-14 9-23t23-9h64q14 0 23 9t9 23zm416 352q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
      </svg>
    );
  }

}

export default ClockSvg;

import React from 'react';

class Bills extends React.Component{
  render(){
    return(
      <div className="component-container">
        <header>Immediate Bills</header>
        <ul>
          <li>Rent</li>
          <li>Internet</li>
          <li>Gym membership</li>
          <li>Insurance</li>
        </ul>
      </div>
    );
  }
}

export default Bills;

import React from 'react';

class Bills extends React.Component{
  render(){
    return(
      <div className="component-container">
        <header>Immediate Bills</header>
        <ul>
          <li className="bills">Rent</li>
          <li className="bills">Internet</li>
          <li className="bills">Gym membership</li>
          <li className="bills">Insurance</li>
        </ul>
      </div>
    );
  }
}

export default Bills;

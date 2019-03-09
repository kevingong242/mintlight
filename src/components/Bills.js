import React from 'react';

class Bills extends React.Component{
  render(){
    return(
      <div className="component-container">
        <header>Frequent Bills</header>
        <ul>
          <li className="bills">
            Rent
              <button>Add</button>
          </li>
          <li className="bills">
            Internet
              <button>Add</button>
          </li>
          <li className="bills">
            Gym membership
              <button>Add</button>
          </li>
          <li className="bills">
            Insurance
              <button>Add</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Bills;

import React from 'react';
import Line from './Line';
import BarTextContent from './BarTextContent';

class Summary extends React.Component{
  renderLines(){
    return Array(13).fill(null).map((el,i) => (
      <Line bottom={i * 25} key={i}/>
    ))
  }
  render(
  ){
    return(
      <div className="component-container">
        <header>Monthly Summary</header>
        <ul className="months">
          <li className="month">January</li>
          <li className="month">Feburary</li>
          <li className="month">March</li>
          <li className="month">April</li>
          <li className="month">May</li>
          <li className="month">June</li>
          <li className="month">July</li>
          <li className="month">August</li>
          <li className="month">September</li>
          <li className="month">October</li>
          <li className="month">November</li>
          <li className="month">December</li>
        </ul>
        <div className="graph-wrapper">
          <div className="graph">
            <div className="BarContent">
              {this.renderLines()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;

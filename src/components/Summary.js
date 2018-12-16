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
        <div className="graph-wrapper">
          <div className="graph">
            <BarTextContent/>
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

import React from 'react';

class Line extends React.Component{
  render(){
      return(
        <div className="line" style={{bottom: this.props.bottom}}>
        </div>
      );
  }
}

export default Line;

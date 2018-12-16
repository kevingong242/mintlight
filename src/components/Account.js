import React from 'react';

class Account extends React.Component{

  render(){
    return(
      <div className="component-container">
        <header>Account</header>
        <p>Credit Debt: {this.props.debt}</p>
      </div>
    );
  }
}

export default Account;

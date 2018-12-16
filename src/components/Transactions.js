import React from 'react';
import AddTransactionForm from './AddTransactionForm';
import Item from './Item';

class Transactions extends React.Component{
  checkTransactions(){
    if(!this.props.transactions){
      return null;
    }
    return (Object.keys(this.props.transactions).map(key => <Item key={key} index={key} removeTransaction={this.props.removeTransaction} details={this.props.transactions[key]} updateTransaction={this.props.updateTransaction}/>));
  }
  render() {
    return(
      <div className="component-container">
        <header>Transactions </header>
        <p id="monthlyBudget">
          Monthly Budget: ${this.props.budget} Remaining
        </p>
        <p id="monthlyTotal">
          Monthly Total: ${this.props.debt}
        </p>
        {/*<button onClick={this.props.loadSample}>Load Sample Transaction</button>*/}
        <AddTransactionForm addTransaction={this.props.addTransaction}/>
        <header id="transactionHeader">
          <p>Category</p>
          <p>Price</p>
        </header>
        <ul id="transactionList">
          {this.checkTransactions()}
        </ul>
      </div>
    );
  }
}

export default Transactions;

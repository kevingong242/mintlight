import React, { Component } from 'react';
import Account from './components/Account';
import Summary from './components/Summary';
import Transactions from './components/Transactions';
import Bills from './components/Bills';
import './app.css';
import sampleTransactions from './sampleTransactions';
import base from './base';

class App extends Component {
  state = {
    transactions: {},
    debt: 0,
    budget: 1000,
  };
  componentDidMount(){
    //reinstate local storage
    /*
    const localStorageRef = JSON.parse(localStorage.getItem('bobsTransaction'));
    if(localStorageRef){

      const keys = Object.keys(localStorageRef.transactions);
      if(keys.length > 0){
      //Goes through the debt
        for(const key of keys){
          localStorageRef.debt -= localStorageRef.transactions[key].price;
        }
        localStorageRef.budget -= localStorageRef.debt;
      }
      this.setState({...localStorageRef});
    }*/
    this.ref = base.syncState(`bobsTransaction`, {
      context: this,
      state: 'transactions'
    });
  }

  componentDidUpdate(){
    const keys = Object.keys(this.state.transactions);
    var currDebt = 0;
    if(keys.length > 0){
      for(const key of keys){
        currDebt -= this.state.transactions[key].price;
      }
    }
    if(this.state.debt != currDebt){
      this.setState({
        debt: currDebt,
        budget: this.state.budget + currDebt
      });
    }
    //localStorage.setItem('bobsTransaction', JSON.stringify(this.state));
  }


  componentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addTransaction = (transaction) => {
    //Take a copy of the existing state
    const transactions = {...this.state.transactions};
    //Add new transaction to the transaction variable
    transactions[`transaction${Date.now()}`] = transaction;
    //Set the new transaction object to state
    this.setState({
      transactions,
      debt: this.state.debt - transaction.price,
      budget: this.state.budget - transaction.price
      //debt:parseFloat(Math.round((this.state.debt - transaction.price) * 100) / 100).toFixed(2),
      //budget: parseFloat(Math.round((this.state.budget - transaction.price) * 100) / 100).toFixed(2)
      });
  };

  removeTransaction = (key) => {
    const transactions = {...this.state.transactions};
    transactions[key] = null;
    this.setState({transactions});
    if(Object.keys(this.state.transactions).length === 1){
      this.setState({budget: 1000});
    }
  }

  updateTransaction = (key, updatedItem) => {
    const transactions = {...this.state.transactions};
    transactions[key] = updatedItem;
    this.setState({transactions});
  }

  loadSample = () => {
    this.setState({transactions: sampleTransactions});
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row1">
            <Account cash={this.state.cash} transactions={this.state.transactions} debt={this.state.debt} investments={this.state.investments} overall={this.state.overall}/>
            <Transactions addTransaction={this.addTransaction} removeTransaction={this.removeTransaction} updateTransaction={this.updateTransaction} loadSample={this.loadSample} transactions={this.state.transactions} budget={this.state.budget} debt={this.state.debt}/>
          </div>
          <div className="row2">
            <Summary/>
            <Bills/>
          </div>
        </div>
    </React.Fragment>
    );
  }
}

export default App;

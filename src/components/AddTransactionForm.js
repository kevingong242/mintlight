import React from 'react';

class AddTransactionForm extends React.Component{
  categoryRef = React.createRef();
  priceRef = React.createRef();

  createTransaction = (e) => {
    e.preventDefault();
    const transaction = {
      category: this.categoryRef.current.value,
      price: parseFloat(this.priceRef.current.value)
    };
    this.props.addTransaction(transaction);
    e.currentTarget.reset();
  }
  render(){
    return (
      <form className="transaction-edit" onSubmit={this.createTransaction}>
        <select name="category" ref={this.categoryRef}>
          <option>Food</option>
          <option>Travel</option>
          <option>Rent</option>
        </select>
        <input name="price" type="number" min={0} step={0.01} placeholder="Price" ref={this.priceRef} required/>
        <button type="submit">+ Add Transaction</button>
      </form>
    );
  }
}

export default AddTransactionForm;

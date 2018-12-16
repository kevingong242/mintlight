import React from 'react';

class Item extends React.Component{
  handleDelete = () => {
    this.props.removeTransaction(this.props.index);
  }

  handleEdit = (event) => {
    var editBtn = document.getElementById('editTransaction');
    var categoryEdit = document.getElementById('categoryDisplay');
    var priceEdit = document.getElementById('priceDisplay');
    var item = document.getElementById('currentItem');

    if(editBtn.innerHTML === 'Edit'){
      categoryEdit.contentEditable = true;
      priceEdit.contentEditable = true;
      item.style.background = "green";
      categoryEdit.style.background = "pink";
      priceEdit.style.background = "pink";
      editBtn.innerHTML = "Save";
    }else{
      categoryEdit.contentEditable = false;
      priceEdit.contentEditable = false;
      item.style.background = "none";
      categoryEdit.style.background = "none";
      priceEdit.style.background = "none";
      editBtn.innerHTML = "Edit";
    }
    const updatedItem = {
      ...this.props.details,
      price: priceEdit.innerHTML,
      category: categoryEdit.innerHTML
    };
    this.props.updateTransaction(this.props.index, updatedItem);
  }
  render(){
    return (
      <li id="currentItem">
          <p id="categoryDisplay" name="category">{this.props.details.category} </p>
          <p id="priceDisplay" name="price">{this.props.details.price} </p>
          <div id="itemBtn">
            <button id="editTransaction" onClick={this.handleEdit}>Edit</button>
            <button id="deleteTransaction" onClick={this.handleDelete}>Delete</button>
          </div>
      </li>
    );
  }
}

export default Item;

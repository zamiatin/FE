import React, { Component } from 'react';

//components
import Input from './input';

//styles
import styles from './styles/cart.scss';

//img
import products from './img/icon.svg';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleChangeAmount = this.handleChangeAmount.bind(this);

    this.state = {
      selectValue: this.props.quantity[0],
      amount: 0,
      quantity: this.props.quantity,
      price: this.props.price,
    };
  }

  handleSelect(e) {
    this.setState({
      selectValue: e.target.value,
    });
  }

  handleChangeAmount(value) {
    const { price } = this.state;
    this.setState({
      amount: value * price
    })
  }

  render() {
    const { amount, quantity } = this.state;

    const select = quantity.map((item, i) => <option key={i} value={item}>{item}</option>)

    const trashIcon = <svg width="20" height="23" viewBox="0 0 20 23">
        <g className="cartDeleteIcon" fillRule="nonzero" opacity=".534">
          <path d="M6.978 6.579a.591.591 0 0 0-.593.589v12.077c0 .326.266.59.593.59a.591.591 0 0 0 .593-.59V7.168a.591.591 0 0 0-.593-.59zM10.022 6.579a.591.591 0 0 0-.593.589v12.077c0 .326.266.59.593.59a.591.591 0 0 0 .593-.59V7.168a.591.591 0 0 0-.593-.59zM12.952 6.579a.591.591 0 0 0-.593.589v12.077c0 .326.265.59.593.59a.591.591 0 0 0 .593-.59V7.168a.591.591 0 0 0-.593-.59z"/>
          <path d="M19.288 3.082h-4.191V.09H5.027v2.993H.577a.534.534 0 0 0-.535.533c0 .294.24.532.535.532h1.373l1.584 16.72a1.971 1.971 0 0 0 1.974 1.936h9.026a1.971 1.971 0 0 0 1.974-1.934l1.663-16.722h1.116a.534.534 0 0 0 .535-.532.534.534 0 0 0-.535-.533zM6.098 1.154h7.927v1.928H6.097V1.154zm9.343 19.634l-.003.052a.901.901 0 0 1-.903.898H5.51a.902.902 0 0 1-.903-.898L3.026 4.147h14.07l-1.655 16.64z"/>
        </g>
      </svg>;

    const propsInput = {
      handleChangeAmount: this.handleChangeAmount,
      amount,
      quantity
    };

    return (
      <div className="cartItem">
        <img src={products} className="cartIcon" alt="" />
        <div className="cartDescription">
          <p className="cartDescriptionTitle">
            Title Lorem ipsum do
          </p>
          <p className="cartDescriptionDetail">
            Lorem ipsum dolor sit amet, quis dictum mauris erat aliquam, ac in pede pharetra quis non et.
          </p>
          <div className="cartSelect">
            <select value={this.state.selectValue} onChange={this.handleSelect}>
              {select}
            </select>
          </div>
        </div>
        <div className="cartControlsWrapper">
          <div className="cartDelete"
            data-id={this.props.id}
            onClick={this.props.handleDelete}>
            {trashIcon}
          </div>
          <div className="cartControls">
            <Input {...propsInput} />
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
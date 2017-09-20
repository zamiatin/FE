import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleChangeAmount = this.handleChangeAmount.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);

    this.state = {
      quantity: 1,
      isDisableDecrease: true,
      isDisableIncrease: false,
    };
  }

  handleQuantity(e) {
    this.setState({
      quantity: e.target.value
    });
  }

  handleChangeAmount(value) {
    const {changeAmount, price, id } = this.props;
    changeAmount(id, (value * price));
  }

  handleDecrease() {
    const { quantity } = this.state;
    if (quantity == 1) {
      this.setState({
        isDisableDecrease: true,
      });
    } else {
      this.handleChangeAmount(quantity - 1);
      this.setState({
        quantity: quantity - 1,
        isDisableDecrease: false,
        isDisableIncrease: false,
      });
    }
  }

  handleIncrease() {
    const { quantity } = this.state;
    const { articles } = this.props;
    if (quantity == articles.length) {
      this.setState({
        isDisableIncrease: true,
      });
    } else {
      this.handleChangeAmount(quantity + 1);
      this.setState({
        quantity: quantity + 1,
        isDisableIncrease: false,
        isDisableDecrease: false,
      });
    }
  }

  render() {
    const { quantity, isDisableDecrease, isDisableIncrease } = this.state;
    const { amount } = this.props;

    return (
      <div className="cartInputWrapper">
        <div className="cartInput">
          <button onClick={this.handleDecrease}
            disabled={isDisableDecrease ? true : false}
            style={isDisableDecrease ? {cursor: 'auto'} : null}>&ndash;</button>
          <input value={quantity}
            onChange={this.handleQuantity}
            disabled />
          <button onClick={this.handleIncrease}
            disabled={isDisableIncrease ? true : false}
            style={isDisableIncrease ? {cursor: 'auto'} : null}>+</button>
        </div>
        <div className="cartInputAmount">{amount} &euro;</div>
      </div>
    );
  }
}

export default Input;
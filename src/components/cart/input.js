import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);

    this.handleValue = this.handleValue.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
    this.handleIncrease = this.handleIncrease.bind(this);

    this.state = {
      value: 1,
      isDisableDecrease: true,
      isDisableIncrease: false,
    };
  }

  handleValue(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleDecrease() {
    const { value } = this.state;
    const { handleChangeAmount } = this.props;
    if (value == 1) {
      this.setState({
        isDisableDecrease: true,
      });
    } else {
      handleChangeAmount(value - 1);
      this.setState({
        value: value - 1,
        isDisableDecrease: false,
        isDisableIncrease: false,
      });
    }
  }

  handleIncrease() {
    const { value } = this.state;
    const { handleChangeAmount, quantity } = this.props;
    if (value == quantity.length) {
      this.setState({
        isDisableIncrease: true,
      });
    } else {
      handleChangeAmount(value + 1);
      this.setState({
        value: value + 1,
        isDisableIncrease: false,
        isDisableDecrease: false,
      });
    }
  }

  render() {
    const { value, isDisableDecrease, isDisableIncrease } = this.state;
    const { amount } = this.props;

    return (
      <div className="cartInputWrapper">
        <div className="cartInput">
          <button onClick={this.handleDecrease}
            disabled={isDisableDecrease ? true : false}
            style={isDisableDecrease ? {cursor: 'auto'} : null}>&ndash;</button>
          <input value={value}
            onChange={this.handleValue}
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
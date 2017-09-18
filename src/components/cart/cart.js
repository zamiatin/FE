import React, { Component } from 'react';
import Item from './item';

//styles
import styles from './styles/cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      products1: null,
      products2: null,
      products3: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { dataCart } = nextProps;

    if (dataCart) {
      this.setState({
        products1: dataCart[0],
        products2: dataCart[1],
        products3: dataCart[2],
      });
    }
  }

  handleDelete(e) {
    // const { data } = this.state;
    // const index = data.indexOf(e.currentTarget.dataset.id);
    // const newArr = data.splice(index, index);
    // this.setState({
    //   data: newArr
    // });
  }

  render() {
    const { dataCart } = this.props;
    const list = dataCart ? dataCart.map((item, i) => {
      const { price, quantity, title, description } = item;
      const propsItem = {
        key: i,
        id: i,
        handleDelete: this.handleDelete,
        price,
        quantity,
      }
      return <Item {...propsItem} />
      })
       : null;

    return (
      <div className="cartInner">
        {list}
        <div className="cartTotal">350 &euro;</div>
      </div>
    );
  }
}

export default Cart;
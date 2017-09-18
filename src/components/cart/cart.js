import React, { Component } from 'react';
import Item from './item';

//styles
import styles from './styles/cart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      data: null,
      isLoad: false
    };
  }

  componentWillMount() {
    fetch('http://59be7d9c359bf20011675515.mockapi.io/v1/cart')
      .then(response => {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }

          return response.json()
      .then(responseData => {
          this.setState({
            isLoad: true,
            data: responseData.list.split(', ')
          })
        });
      })
      .catch((err) => console.log('Fetch Error :-S', err));
  }

  handleDelete(e) {
    const { data } = this.state;
    const index = data.indexOf(e.currentTarget.dataset.id);
    const newArr = data.splice(index, index);
    this.setState({
      data: newArr
    });
  }

  render() {
    const { data, isLoad } = this.state;
    const list = isLoad ? data.map((item, i) => <Item key={i} id={item} handleDelete={this.handleDelete} />) : null;

    return (
      <div className="cartInner">
        {list}
        <div className="cartTotal">350 &euro;</div>
      </div>
    );
  }
}

export default Cart;
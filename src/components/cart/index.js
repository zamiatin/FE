import React, {Component} from 'react';

//conponents
import Cart from './cart';

//styles
import styles from './styles/cart.scss';

class CartBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    }
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
                data: responseData
              });
          });
        })
        .catch((err) => console.log('Fetch Error:', err));
  }

  render() {
    const { data } = this.state;

    return (
      <div style={{ position: 'relative' }}>
        <div className="cartWrapper">
          <Cart dataCart={data} />
        </div>
        <div className="cartBottom" />
      </div>
    );
  }

};

export default CartBlock;
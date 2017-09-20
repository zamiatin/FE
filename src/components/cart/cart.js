import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Item from './item';

//actions
import { fetchData, changeAmount, deleteProduct } from '../../actions';

//styles
import './styles/cart.scss';

const mapStateToProps = state => ({
  data: state.products.dataCart
});

const mapDispatchToProps = dispatch => ({
  changeAmount: bindActionCreators(changeAmount, dispatch),
  fetchData: bindActionCreators(fetchData, dispatch),deleteProduct: bindActionCreators(deleteProduct, dispatch)
});

@connect(mapStateToProps, mapDispatchToProps)
class Cart extends Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      data: null
    };
  }

  componentWillMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    data ? this.setState({
      data
    }) : null;
  }

  handleDelete(index) {
    const { data, deleteProduct } = this.props;
    deleteProduct(index);
  }

  render() {
    const arrTotal = [];
    let total;
    const { data } = this.state;
    const { changeAmount, deleteProduct } = this.props;
    const list = data ? data.map((item, i) => {
      const propsItem = {
        key: i,
        id: i,
        dataItem: item,
        handleDelete: this.handleDelete,
        changeAmount,
      }

      return <Item {...propsItem} />
      }) : null;

    data ? data.forEach((item, i) => {
      arrTotal.push(+item.amount);
    }) : null;

    data && data.length >= 1 ? total = arrTotal.reduce((sum, current) => sum + current
    ): total = 0;

    return (
      <div className="cartInner">
        {list}
        <div className="cartTotal">{total} &euro;</div>
      </div>
    );
  }
}

export default Cart;
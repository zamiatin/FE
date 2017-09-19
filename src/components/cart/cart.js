import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components
import Item from './item';

//actions
import { fetchData } from '../../actions/fetch';
import { changeAmount } from '../../actions/item';

//styles
import './styles/cart.scss';

const mapStateToProps = state => ({
  data: state.dataCart
});

const mapDispatchToProps = dispatch => ({
  changeAmount: bindActionCreators(changeAmount, dispatch),
  fetchData: bindActionCreators(fetchData, dispatch)
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

  handleDelete(e) {
    // const { data } = this.state;
    // const index = data.indexOf(e.currentTarget.dataset.id);
    // const newArr = data.splice(index, index);
    // this.setState({
    //   data: newArr
    // });
  }

  render() {
    const { data } = this.state;
    const { changeAmount } = this.props;

    const list = data ? data.map((item, i) => {
      const propsItem = {
        key: i,
        id: i,
        dataItem: item,
        handleDelete: this.handleDelete,
        changeAmount
      }
      return <Item {...propsItem} />
      }) : null;

    return (
      <div className="cartInner">
        {list}
        <div className="cartTotal">350 &euro;</div>
      </div>
    );
  }
}

export default Cart;
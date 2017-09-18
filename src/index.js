import React from 'react';
import ReactDOM from 'react-dom';

//components
import Header from './components/header';
import Title from './components/title';
import CartBlock from './components/cart';
import Footer from './components/footer';

//styles
import styles from './styles/main.scss';

const App = (
  <div className="container">
    <Header />
    <Title />
    <CartBlock />
    <Footer />
  </div>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);

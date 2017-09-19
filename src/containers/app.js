import React from 'react';

//components
import Header from '../components/header';
import Title from '../components/title';
import CartBlock from '../components/cart';
import Footer from '../components/footer';

//styles
import './styles/main.scss';

const App = () => (
  <div className="container">
    <Header />
    <Title />
    <CartBlock />
    <Footer />
  </div>
);

export default App;
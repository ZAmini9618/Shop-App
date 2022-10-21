import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Store from './components/shared/store/Store';
import ProductDetails from './components/shared/productDetails/ProductDetails';
import Navbar from './components/shared/navbar/Navbar';
import ShopCart from './components/shared/shopCart/ShopCart';

// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;

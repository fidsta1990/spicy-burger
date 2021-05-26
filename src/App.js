import { Switch, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import { Fragment, useState } from "react";
import Global from "./components/globalstyles/Global";
import Footer from "./components/Footer/Footer";
import Orders from './components/Basket/Orders'

function App() {
  const [cartShown, setCartShown] = useState(false);
  const location = useLocation();

  const showCartHandler = () => {
    setCartShown(true);
  };
  const hideCartHandler = () => {
    setCartShown(false);
  };

  const checkNav =
    location.pathname !== "/checkout" ? (
      <Navbar onShowCart={showCartHandler} />
    ) : null;
  const checkFooter = location.pathname !== "/checkout" ? <Footer /> : null;

  return (
    <Fragment>
      <Global />
      {checkNav}
      {cartShown && <Orders onClose={hideCartHandler} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="*" component={Error} />
      </Switch>
      {checkFooter}
    </Fragment>
  );
}

export default App;

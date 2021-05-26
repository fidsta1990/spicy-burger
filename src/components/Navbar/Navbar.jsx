import React, { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";
import * as Styling from "./NavStyles";
import { Link } from "react-router-dom";
import { links } from "./details";
import AOS from "aos";
import "aos/dist/aos.css";
import CartIcon from "./CartIcon";
import { CartMobileIcon } from "./CartIcon";

const Navbar = ({ onShowCart }) => {
  const [toggleNav, setToggleNav] = useState(false);

  const toggleHandler = () => setToggleNav(!toggleNav);

  const closeNav = () => setToggleNav(false);

  // check window width size
  const checkSize = () => {
    let windowWidth = window.innerWidth;
    if (windowWidth > 800) {
      closeNav();
    }
  };

  //animate navbar load
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // close nav at ipad size
  useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
    // eslint-disable-next-line
  }, [toggleNav]);

  return (
    <Styling.Nav className="navbar" data-aos="fade-down">
      <Styling.Center>
        <Styling.Header>
          {/* logo */}
          <Styling.Logo>
            <Link to="/" onClick={closeNav}>
              <GiChiliPepper className="chilli" /> Spicy Burger
            </Link>
          </Styling.Logo>
          {/* basket */}
          <CartMobileIcon onShowCart={onShowCart} />
          {/* bar */}
          <Styling.Bar onClick={toggleHandler}>
            {toggleNav ? (
              <FaTimes className="menuIcon" />
            ) : (
              <HiOutlineMenuAlt3 className="menuIcon" />
            )}
          </Styling.Bar>
        </Styling.Header>
        {/* menu */}
        <div className={toggleNav ? "links show" : "links"}>
          <Styling.Menu>
            {links.map((items, id) => {
              const { text, url } = items;
              return (
                <Link key={id} to={url} onClick={closeNav}>
                  {text}
                </Link>
              );
            })}
          </Styling.Menu>
        </div>
        {/* order */}
        <Styling.OrderWrapper>
          <Styling.Order onClick={onShowCart}>Basket</Styling.Order>
          <CartIcon onShowCart={onShowCart} />
        </Styling.OrderWrapper>
      </Styling.Center>
    </Styling.Nav>
  );
};

export default Navbar;

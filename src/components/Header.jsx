import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  closeCheckOutModal,
  getProduct,
  openCheckOutModal,
} from "../redux/action/actionCreator";
import CheckOutModal from "./CheckOutModal";

const Header = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.checkOut.checkOutModalIsOpen);
  const itemInCartState = useSelector((state) => state.checkOut);

  const cartIsEmpty = itemInCartState.cartEmpty;
  const itemInCart = itemInCartState.checkoutItems;

  console.log(
    modalState,
    cartIsEmpty,
    itemInCart,
    itemInCartState,
    itemInCartState.cartEmpty
  );

  useEffect(() => {
    dispatch(getProduct);
  }, [dispatch]);
  const openCheckOut = () => {
    modalState ? dispatch(closeCheckOutModal()) : dispatch(openCheckOutModal());
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <p>
          Kay-<span>Foods</span>
        </p>
      </Link>

      <nav className="navigation">
        <Link to="/" className="link-item">
          Home
        </Link>
        <Link to="/menu" className="link-item">
          Menu
        </Link>
        <Link to="/Categories" className="link-item">
          Categories
        </Link>
        <Link to="" className="link-item">
          About
        </Link>
        <span onClick={openCheckOut} className="link-item cart-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cart"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          {!cartIsEmpty && itemInCart.length !== 0 && (
            <div>{itemInCart.length}</div>
          )}
        </span>
      </nav>
      {modalState && (
        <CheckOutModal
          cartIsEmpty={cartIsEmpty}
          itemInCartState={itemInCartState}
        />
      )}
    </header>
  );
};

export default Header;

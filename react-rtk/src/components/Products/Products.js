import React, { useEffect, useState } from "react";
import { cartActions } from "../../store/reducers/cart-reducer";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((data) => {
      if (data.ok) {
        data.json().then((res) => setProducts(res));
      }
    });
  }, []);

  function addToCartHandler(item) {
    dispatch(cartActions.addItems([...cartItems, item]));
  }

  return <div>Products</div>;
}

export default Products;

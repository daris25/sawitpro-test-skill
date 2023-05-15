import React from "react";
import styles from "./styles";
import CardCart from "../CardCart";
import { useSelector } from "react-redux";
import { cartMoviesFetch } from "../../store/actions";

function CartView(props) {
  const { onShowCart, onCloseCart } = props;
  const cart = useSelector((state) => state.cart);

  const onCLose = () => {
    onCloseCart(false);
  };

  const removeItem = (val) => {
    const items = cart?.cartResponse?.filter((res, i) => i !== val);
    cartMoviesFetch(items);
    alert("Movie remove from cart!");
  };

  const deleteItems = (val) => {
    cartMoviesFetch([]);
    alert("All Movie aleady remove!");
  };

  const sumTotal = () => {
    return cart?.cartResponse?.length > 0
      ? cart?.cartResponse?.map((res) => res.price).reduce((i, v) => i + v)
      : 0;
  };

  return (
    <div style={onShowCart ? styles.containerCart : styles.containerOff}>
      <div style={styles.cartView}>
        <div className="flexRowBetween">
          <div>
            <label style={styles.titleViewcart}>CART MOVIE</label>
            <div
              onClick={deleteItems}
              style={{ marginTop: 15, marginBottom: 15 }}
            >
              <label>Delete Items</label>
            </div>
          </div>
          <div onClick={onCLose}>
            <img
              style={styles.closeCart}
              src="https://cdn-icons-png.flaticon.com/512/7693/7693271.png"
              alt="icon-close-cart"
            />
          </div>
        </div>
        <div>
          {cart?.cartResponse?.map((res, i) => {
            const psh = { ...res, i };
            return <CardCart key={i} {...psh} delItem={() => removeItem(i)} />;
          })}
        </div>
        <div style={styles.boxPricein} className="flexRowBetween">
          <label style={styles.font20}>Subtotal</label>
          <label style={styles.fontPrice}>Rp {sumTotal()},-</label>
        </div>
      </div>
    </div>
  );
}

export default CartView;

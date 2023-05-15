import React from "react";
import styles from "./styles";

function CardCart(props) {
  const { delItem } = props;

  return (
    <div style={styles.marBo} className="felxRow">
      {/* <input style={styles.boxCheck} type="checkbox" /> */}
      <div className="felxRow">
        <img
          style={styles.imgCart}
          src="https://m.media-amazon.com/images/I/81PKkTqhc3L._SY679_.jpg"
          alt="cart-img"
        />
        <div className="flexCol flexBetween">
          <label for="vehicle1" style={{ fontSize: 20, fontWeight: "bold" }}>
            {props.title}
          </label>
          <div className="flexCol">
            <label for="vehicle1">Price :</label>
            <label style={{ fontSize: 20, fontWeight: "bold" }}>
              Rp {props.price},-
            </label>
          </div>
        </div>
      </div>
      <div onClick={() => delItem(props.i)}>
        <img
          style={{
            width: 60,
            height: 60,
            marginLeft: 100,
            marginTop: 50,
          }}
          alt="trash-icon"
          src="https://cdn-icons-png.flaticon.com/512/1869/1869668.png"
        />
      </div>
    </div>
  );
}

export default CardCart;

import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { cartMoviesFetch } from "../../store/actions";

function BannerMovie(props) {
  const {
    movieResponse: { results },
  } = useSelector((state) => state.movie);
  const cart = useSelector((state) => state.cart);

  const pushCart = () => {
    cartMoviesFetch([
      ...cart?.cartResponse,
      {
        title: results?.[0]?.title,
        price: 200000,
      },
    ]);
  };

  return (
    <div className="flexCardBanner">
      <div className="flexBetween">
        <div className="flexCardLeft">
          <label className="textTitle">{results?.[0]?.title}</label>
          <label className="textSubtitle">{results?.[0]?.opening_crawl}</label>
        </div>
        <div className="flexCardLeft">
          <label className="textTitlePrice">Price Rent /day</label>
          <label className="textPrice">Rp 200.000,-</label>
          <div onClick={pushCart} className="flexBtn">
            <div className="btnAdd">Add Cart</div>
          </div>
        </div>
      </div>
      <img
        className="imgBanner"
        src="https://m.media-amazon.com/images/I/81PKkTqhc3L._SY679_.jpg"
        alt="imgBanner"
      />
    </div>
  );
}

export default BannerMovie;

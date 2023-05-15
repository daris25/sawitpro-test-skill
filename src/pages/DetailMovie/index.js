import React from "react";
import "./styles.css";
import BaseContainer from "../../component/BaseContainer";
import Header from "../../component/Header";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { cartMoviesFetch } from "../../store/actions";

function DetailMovie() {
  const location = useLocation();
  const { movie } = location.state;
  const cart = useSelector((state) => state.cart);

  const pushCart = () => {
    cartMoviesFetch([
      ...cart?.cartResponse,
      {
        title: movie?.title,
        price: 200000,
      },
    ]);
    alert("Movie already to Cart!");
  };

  return (
    <BaseContainer>
      <Header />
      <div className="flexDetail">
        <img
          className="imgBannerDetail"
          src="https://m.media-amazon.com/images/I/81PKkTqhc3L._SY679_.jpg"
          alt="imgBanner"
        />
        <div className="viewRight">
          <label className="textTItleDesc">{movie?.title}</label>
          <div className="flexRow">
            <label className="text01">Director</label>
            <label className="text02">: {movie?.director} </label>
          </div>
          <div className="flexRow">
            <label className="text01">Producer</label>
            <label className="text02">: {movie?.producer}</label>
          </div>
          <div className="flexRow mb20">
            <label className="text01">Release Date</label>
            <label className="text02">: {movie?.release_date}</label>
          </div>

          <div className="flexCol mb20">
            <label className="textTItleDesc">Sinopsis</label>
            <label className="text02 justifyText">{movie?.opening_crawl}</label>
          </div>

          <div>
            <label className="textTItleDesc">Price Rp 250.000,-</label>
            <div onClick={pushCart} className="btnCardMovie">
              <div className="">Add Cart</div>
            </div>
          </div>
        </div>
      </div>
    </BaseContainer>
  );
}

export default DetailMovie;

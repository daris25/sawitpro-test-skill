import React from "react";
import "./styles.css";

function cardMovie(props) {
  const { onPress } = props;

  return (
    <div className="cardMovie">
      <img
        className="cardMovieImg"
        alt="card-movie"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-vfGt3QVTjBXJ57b-wKkSJP6yQ1YW4Rnk7qiL7MnAt_LWhs7SFlYc4jH9hDt58CcF9o0&usqp=CAU"
      />
      <div className="colFlex">
        <label className="titleCard">{props.title}</label>
        <label className="subtitleCard">{props.opening_crawl}</label>
        <label className="priceEnd">Rp 250.000,-</label>
        {/* <div className="btnCardMovie">
          <div className="" onClick={onPress}>
            Add Cart
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default cardMovie;

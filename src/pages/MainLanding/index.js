import React, { useEffect } from "react";
import "./styles.css";
import BaseContainer from "../../component/BaseContainer";
import BannerMovie from "../../component/BannerMovie";
import CardMovie from "../../component/CardMovie";
import HeaderView from "../../component/Header";
import { useNavigate } from "react-router-dom";
import { getMovieFetch } from "../../store/actions";
import { useSelector } from "react-redux";

function MainLanding(props) {
  const movie = useSelector((state) => state.movie);
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate();

  // console.log("cartVidew >>", cart);

  useEffect(() => {
    getMovieFetch({});
  }, []);

  const MovieArray = () => {
    return movie?.movieResponse?.results?.map((item) => {
      return (
        <div
          onClick={() => navigate(`/detail-movie/`, { state: { movie: item } })}
          key={item.title}
          className="flexMr"
        >
          <CardMovie {...item} onPress={() => console.log("testCOba >>>")} />
        </div>
      );
    });
  };

  return (
    <BaseContainer>
      <HeaderView />
      <BannerMovie />
      <div className="flexWrapRow">
        <MovieArray />
      </div>
    </BaseContainer>
  );
}

export default MainLanding;

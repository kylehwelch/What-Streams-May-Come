import Detail from "./Detail";
import React, { useState } from "react";

const Card = (movie) => {
  const [showModal, setShowModal] = useState(false);
  let img_path = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div class="modal" id="modal">
        <Detail
          showModal={showModal}
          closeModal={() => {
            setShowModal(false);
          }}
          movieID={movie.info.id}
        />

        <div className="movie">
          <img
            onClick={() => {
              setShowModal(true);
            }}
            src={img_path + movie.info.poster_path}
            className="poster"
            alt=""
          ></img>
          <div className="movie-details">
            <div className="box">
              <h4 className="title">
                {movie.info.title}
                {movie.info.name}
              </h4>
              <p className="rating">{movie.info.vote_average}</p>
            </div>
            <div className="overview">
              <h1>
                {movie.info.title}
                {movie.info.name}
              </h1>
              {movie.info.release_date}
              {movie.info.first_air_date}
              <br></br>
              {movie.info.overview}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;

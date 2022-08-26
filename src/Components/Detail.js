import Modal from "react-modal";
import React, { useState, useEffect } from "react";
let base_url = "https://api.themoviedb.org/3/movie/";
let url_end =
  "?api_key=0c0ed66de9196e5f32c517d504323737&append_to_response=watch/providers";
let img_path = "https://image.tmdb.org/t/p/w500";

const Detail = ({ showModal, closeModal, movieID }) => {
  const [movieData, setData] = useState(null);

  useEffect(() => {
    if (showModal) {
      fetch(base_url + movieID + url_end)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [movieID, showModal]);

  return (
    <>
      <Modal
        className="themodal"
        isOpen={showModal}
        onRequestClose={closeModal}
        // overlayClassName = "moverlay"
      >
        {movieData && (
          <div className="movDetails">
            <div>
              <img
                className="mposter"
                src={img_path + movieData.poster_path}
                alt=""
              ></img>
            </div>
            <div className="mdetails">
              <h1 className="mtitle">{movieData.title}</h1>
              <br></br>
              <p className="mdescription">{movieData.overview}</p>
              <br></br>
              <li className="mgenres">
                {movieData.genres.map((a) => a.name).join(", ")}
              </li>
              <li className="mruntime">{movieData.runtime} minutes</li>
              <li className="mreleaseDate">{movieData.release_date}</li>
              <div className="mServices">
                {movieData["watch/providers"].results?.US?.flatrate?.length === undefined ? (
                  <li>No Streaming Services Available</li>
                ) : (
                  <li>
                    {
                      movieData["watch/providers"].results.US.flatrate?.[0]
                        .provider_name
                    }
                  </li>
                )}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};
export default Detail;

import react, { useState, useEffect } from "react";
import Card from "./Card";
let API_key = "&api_key=0c0ed66de9196e5f32c517d504323737";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Drama", "Comedy", "Animation", "Fantasy", "Sci-Fi"];

const Main = () => {
  const [movieData, setData] = useState([]);
  const [url_set, setURL] = useState(url);
  const [search, setSearch] = useState();
  let page = 1;
  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  }, [url_set]);
  const getData = (movieType) => {
    if (movieType === "Popular") {
      url =
        base_url +
        "/discover/movie?sort_by=popularity.desc" +
        API_key +
        "&language=en-US&page=" +
        page;
    }
    if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?" +
        API_key +
        "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=18&page=" +
        page;
    }
    if (movieType === "Comedy") {
      url =
        base_url +
        "/discover/movie?" +
        API_key +
        "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=35&page=" +
        page;
    }
    if (movieType === "Animation") {
      url =
        base_url +
        "/discover/movie?" +
        API_key +
        "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=16&page=" +
        page;
    }
    if (movieType === "Fantasy") {
      url =
        base_url +
        "/discover/movie?" +
        API_key +
        "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=14&page=" +
        page;
    }
    if (movieType === "Sci-Fi") {
      url =
        base_url +
        "/discover/movie?" +
        API_key +
        "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate&with_genres=878&page=";
    }
    setURL(url);
  };
  const searchMovie = (evt) => {
    if (evt.key === "Enter") {
      url = base_url + "/search/movie?" + API_key + "&query=" + search;
      setURL(url);
      setSearch("");
    }
  };
  return (
    <>
      <div className="header">
        <h1 className="name">
          {/* <a href="http://localhost:3000/?#"> */} 
          What Streams May Come
          {/* </a> */}
        </h1>
        {/* <h1 className="logo"><a href="http://localhost:3000/"><img src="./images/wsmc.png" alt="WSMC"></img></a></h1> */}
        <nav>
          <ul>
            {arr.map((value, pos) => {
              return (
                <li>
                  <a
                    href="#"
                    key={pos}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <form>
          <div className="search-btn" id="srchbtn">
            <input
              type="text"
              placeholder="Enter Movie Name"
              className="inputText"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              onKeyPress={searchMovie}
            ></input>
            <button onClick={searchMovie}>
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="container">
        {movieData.length === 0 ? (
          <p className="notfound">Not Found</p>
        ) : (
          movieData.map((res, pos) => {
            return <Card info={res} key={pos} />;
          })
        )}
      </div>
    </>
  );
};
export default Main;

import React from "react";
import "./nav.css";
import Request from "../requests/requests";

const Nav = ({ setSelectedOption }) => {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(Request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedOption(Request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchHorrorMovies)}>
        Horro
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchMysteryMovies)}>
        Mystery
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchSciFiMovies)}>
        Sci-Fi
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchWesternMovies)}>
        Western
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchAnimationMovies)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOption(Request.fetchTV)}>Tv Movie</h2>
    </div>
  );
};

export default Nav;

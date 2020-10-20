import React, { useEffect, useState } from "react";
import "./results.css";
import axios from "../axios/axios";
import FlipMove from "react-flip-move";

import VideoCard from "../videoCard/VideoCard";

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(selectedOption);
        const data = res.data.results;
        setMovies(data);
        return res;
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [selectedOption]);

  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;

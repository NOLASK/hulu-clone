import React, { forwardRef } from "react";
import "./videoCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TextTruncate from "react-text-truncate";

const VideoCard = forwardRef(({ movie }, ref) => {
  const img_baseURI = "https://image.tmdb.org/t/p/original/";

  return (
    <div ref={ref} className="videoCard">
      <img
        src={`${img_baseURI}${movie.backdrop_path || movie.poster_path}`}
        alt={movie.title}
      ></img>
      <div className="videoCard__info">
        <TextTruncate
          line={1}
          element="p"
          truncateText="..."
          text={movie.overview}
        />
      </div>
      <h2>{movie.title || movie.original_name}</h2>
      <p className="videoCard__stats">
        {movie.media_type && `${movie.media_type}`}
        {" | "}
        {movie.release_date || `${movie.first_air_date}`}
        {" | "}
        <ThumbUpIcon /> {movie.vote_count}
      </p>
    </div>
  );
});

export default VideoCard;

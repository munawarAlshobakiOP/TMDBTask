"use client";
import React, { useState, useRef } from "react";
import DonutChart from "../Donut_Chart/Donut_Chart";
import * as TrendingStyled from "../trending_card/Trending_movie.styled";
import { moreBoxContent } from "../../data/dataG";
import { MoreHoriz_Icon } from "../../assests/icons";
import useClickOutside from "../../hooks/useClickOutside";

const IMAGE_BASE = process.env.NEXT_PUBLIC_IMAGE_BASE;

export default function TrendingMovieCard({ movie }) {
  const [showMoreBox, setShowMoreBox] = useState(false);
  const cardRef = useRef(null);

  const handleMoreClick = (e) => {
    e.preventDefault();
    setShowMoreBox((prev) => !prev);
  };

  useClickOutside(cardRef, () => setShowMoreBox(false), showMoreBox);

  const imageUrl = movie.poster_path
    ? `${IMAGE_BASE}/w200${movie.poster_path}`
    : null;

  return (
    <TrendingStyled.TrendingCard ref={cardRef}>
      {imageUrl ? (
        <TrendingStyled.MoviePoster src={imageUrl} alt={movie.title} />
      ) : (
        <TrendingStyled.NoImagePlaceholder>No Image</TrendingStyled.NoImagePlaceholder>
      )}

      <TrendingStyled.MovieTitle>{movie.title}</TrendingStyled.MovieTitle>

      <TrendingStyled.MovieRating>
        <DonutChart
          percentage={movie.vote_average ? Math.round(movie.vote_average * 10) : 0}
          size={34}
        />
      </TrendingStyled.MovieRating>

      <TrendingStyled.MovieYear>
        {movie.release_date
          ? new Date(movie.release_date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : "Unknown"}
      </TrendingStyled.MovieYear>

      <TrendingStyled.MoreButton onClick={handleMoreClick} type="button">
        <MoreHoriz_Icon />
      </TrendingStyled.MoreButton>

      {showMoreBox && (
        <TrendingStyled.Morebox>
          <TrendingStyled.MoreBoxContent>
            {moreBoxContent.map((item) => (
              <div key={item.id}>
                <p>{item.text}</p>
                <TrendingStyled.MoreBoxItem href={item.href}>
                  {item.linkText}
                </TrendingStyled.MoreBoxItem>
              </div>
            ))}
          </TrendingStyled.MoreBoxContent>
        </TrendingStyled.Morebox>
      )}
    </TrendingStyled.TrendingCard>
  );
}

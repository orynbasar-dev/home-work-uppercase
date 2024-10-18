import React from 'react';

interface CardProps {
  poster: string;
  title: string;
  year: string;
  type: string;
  imdbID: string;
}

const Card: React.FC<CardProps> = ({ poster, title, type, year, imdbID }) => {
  return (
    <div className="card">
      <img src={poster} alt={title} className="w-60 h-72 object-cover border border-[#6627FF] rounded-xl"/>
      <h2 className="mt-6">{title}</h2>
      <p>Year: {year}</p>
      <p>Type: {type}</p>
      <p>IMDB ID: {imdbID}</p>
    </div>
  );
};

export default Card;
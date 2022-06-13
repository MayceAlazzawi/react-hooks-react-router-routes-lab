import React from "react";
import { movies } from "../data";

function Movies() {
  const listMovies = movies.map((d) => <li key={d.title}>{d.title}</li>);
  const listGeneres = movies.map((d) => <li key={d.genres}>{d.genres}</li>);
  const listTime = movies.map((d) => <li key={d.time}>{d.time}</li>);

  return (
    <div>
      <h1>Movies Page</h1>
      <div>
        {listMovies}
        {listTime}
        {listGeneres}
      </div>
    </div>
  );
}

export default Movies;

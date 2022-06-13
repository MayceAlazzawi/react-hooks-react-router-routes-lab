import React from "react";
import { directors } from "../data";

function Directors() {
  const listDirectors = directors.map((d) => <li key={d.name}>{d.name}</li>);
  const listdirectorsmovies = directors.map((d) => <li key={d.movies}>{d.movies}</li>);

  return <div>
    <h1>Directors Page</h1>
    <div>
      {listDirectors}
      {listdirectorsmovies}
    </div>
  </div>;
}

export default Directors;

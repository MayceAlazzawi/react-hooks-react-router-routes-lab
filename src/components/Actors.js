import React from "react";
import { actors } from "../data";

function Actors() {
  const listItems = actors.map((d) => <li key={d.name}>{d.name}</li>);
  const listMovies = actors.map((d) => <li key={d.movies}>{d.movies}</li>);
  return <div>
    <h1>Actors Page</h1>
    {listItems}
    {listMovies}
  </div>
}

export default Actors;

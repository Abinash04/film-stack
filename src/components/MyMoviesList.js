import React from "react";
import Row from "./row";
import requests from "../requests";

export default function MyMoviesList() {
  return (
    <div>
      <Row
        title="My Watched Movies"
        sx={{ "text-align": "left" }}
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow
      />
    </div>
  );
}

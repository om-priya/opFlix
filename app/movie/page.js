import React from "react";
import MovieCard from "../components/MovieCard";

export default async function page() {
  const url = process.env.RAPID_URL;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "120488bd42msh24c180292fea683p1f18e4jsn210039fdafcd",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_result = result.titles;

  return (
    <main>
      <h1 className="flex justify-center text-3xl font-semibold mt-8 mb-8">
        Series & Movies
      </h1>
      <div className="flex flex-wrap justify-evenly">
        {main_result.map((curr) => {
          return <MovieCard key={curr.jawSummary.id} {...curr} />;
        })}
      </div>
    </main>
  );
}

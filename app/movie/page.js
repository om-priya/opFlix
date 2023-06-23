import React from "react";
import MovieCard from "../components/MovieCard";
export const metadata = {
  title: "Movies Page",
  description: "Movies page for this awesome website",
};
export default async function page() {
  const url = process.env.RAPID_URL;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPID_KEY,
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

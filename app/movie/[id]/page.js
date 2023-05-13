import React from "react";
import Image from "next/image";

export default async function page({ params }) {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "120488bd42msh24c180292fea683p1f18e4jsn210039fdafcd",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const main_data = result[0].details;

  return (
    <main className="flex flex-col mt-8">
      <div className="text-xl font-semibold text-center mb-3">
        <p>
          Netflix \{" "}
          <span className="text-xl font-semibold text-center text-red-600">
            {main_data.type}
          </span>
        </p>
      </div>
      <div>
        <Image
          src={main_data.backgroundImage.url}
          alt={main_data.title}
          width={600}
          height={300}
          className="mb-3 m-auto"
        />
      </div>
      <div className="text-3xl font-bold text-center mb-3">
        <h1>{main_data.title}</h1>
      </div>
      <div className="text-center">
        <p>{main_data.synopsis}</p>
      </div>
    </main>
  );
}

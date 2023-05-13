import React from "react";
import Link from "next/link";
import Image from "next/image";

export default async function MovieCard(curr) {
  const { id, title, synopsis, type } = curr.jawSummary;
  const imgUrl = curr.jawSummary.backgroundImage.url;

  return (
    <div className="flex flex-col h-72 w-60 mb-8 shadow-lg rounded">
      <Image
        className="rounded w-60 mb-4"
        src={imgUrl}
        alt="Movie Thumbnail"
        width={150}
        height={50}
      />
      <div className="flex flex-col">
        <h5 className="font-bold truncate mb-2">{title}</h5>
        <p className="italic uppercase mb-2">{type}</p>
        <p className="truncate mb-2">{synopsis}</p>
        <Link
          href={`/movie/${id}`}
          className="border w-[120px] mb-2 bg-black text-white rounded-xl text-center"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

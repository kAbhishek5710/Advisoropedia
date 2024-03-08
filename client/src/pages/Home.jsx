import React, { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  console.log(characters);

  useEffect(() => {
    fetchData();
  }, [page]); // Fetch data when the component mounts

  const fetchData = async () => {
    if (!hasMore) return; // Stop fetching if there are no more pages
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.potterdb.com/v1/potions?page[size]=10&page[number]=${page}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from the PotterDB API");
      }
      const data = await response.json();
      setCharacters((prevCharacters) => [...prevCharacters, ...data.data]); // Append new data to existing characters
      setHasMore(data.data.length > 0); // Set hasMore based on whether there are more items in the response
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleInfiniteScroll = () => {
    try {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (windowHeight + scrollTop >= documentHeight - 100) {
        setPage((prevPage) => prevPage + 1);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, [loading]); // Add loading to dependencies

  return (
    <div className="flex flex-col max-w-lg mx-auto mt-7">
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : ""}
      </button>
      {error && <div>Error: {error}</div>}
      <div className="flex flex-col gap-4 flex-wrap justify-center card-container">
        {characters.map((character) => (
          <Card
            key={character.attributes.id}
            name={character.attributes.name}
            image={character.attributes.image}
            char={character.attributes.characteristics}
            ingredients={character.attributes.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

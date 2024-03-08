import React, { useState, useEffect } from "react";
import Card from "../components/Card";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(characters);

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.potterdb.com/v1/potions?page[size]=30"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from the PotterDB API");
      }
      const data = await response.json();
      setCharacters(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred while fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-around gap-4 m-3 max-w-6xl mx-auto mt-7">
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : ""}
      </button>
      {error && <div>Error: {error}</div>}
      <div className="flex gap-4 flex-2 flex-wrap justify-center card-container">
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

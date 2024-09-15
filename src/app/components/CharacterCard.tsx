import React from 'react';

interface Species {
  name: string;
  url: string;
}

interface Character {
  name: string;
  species: Species[];
}

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const speciesColors: { [key: string]: string } = {
  "https://swapi.dev/api/species/2/": "bg-blue-500",
  "https://swapi.dev/api/species/1/": "bg-green-500",
  "https://swapi.dev/api/species/3/": "bg-red-500",
  "https://swapi.dev/api/species/4/": "bg-purple-500",
  "https://swapi.dev/api/species/5/": "bg-orange-500",
  "https://swapi.dev/api/species/6/": "bg-pink-500",
  "https://swapi.dev/api/species/7/": "bg-yellow-500",
  "https://swapi.dev/api/species/8/": "bg-blue-500",
  "https://swapi.dev/api/species/9/": "bg-green-500",
  "https://swapi.dev/api/species/10/": "bg-red-500",
  "https://swapi.dev/api/species/11/": "bg-purple-500",
  "https://swapi.dev/api/species/12/": "bg-orange-500",
  // Add more species and corresponding colors as needed
};

const CharacterCard = ({ character, onClick }:any) => {
  const speciesUrl = character.species.length > 0 ? character.species[0].url : 'default';
  const background = speciesColors[speciesUrl] || 'bg-gray-500';

  return (
    <div
      className={`character-card p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${background}`}
      onClick={onClick}
    >
      <img
        src={`https://picsum.photos/200/300?random=${Math.random()}`}
        alt={character.name}
        className="w-full h-48 object-cover rounded-lg mb-4 transition-opacity duration-300 hover:opacity-90"
      />
      <h3 className="text-xl font-semibold text-white">{character.name}</h3>
    </div>
  );
};

export default CharacterCard;

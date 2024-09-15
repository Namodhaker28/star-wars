import React, { useState, useEffect } from "react";
import { fetchHomeworld } from "../services/api";

interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  films: string[];
  homeworld: string;
}

interface Homeworld {
  name: string;
  terrain: string;
  climate: string;
  population: string;
}

interface CharacterModalProps {
  character: Character;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose }) => {
  const [homeworld, setHomeworld] = useState<Homeworld | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHomeworld(character.homeworld);
      setHomeworld(data);
    };
    fetchData();
  }, [character]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg leading-6 font-extrabold text-black">{character.name}</h2>
          </div>
          <button onClick={onClose} className="absolute top-2 right-2 text-black hover:text-black">
            &times;
          </button>
        </div>
        <div className="px-4 py-5 sm:p-6 text-black grid grid-cols-2 gap-4">
          <div>
            <p>Height: {parseFloat(character.height) / 100} meters</p>
            <p>Mass: {character.mass} kg</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Number of Films: {character.films.length}</p>
          </div>
          {homeworld && (
            <div>

              <p>Name: {homeworld.name}</p>
              <p>Terrain: {homeworld.terrain}</p>
              <p>Climate: {homeworld.climate}</p>
              <p>Population: {homeworld.population}</p>
            </div>
          )}
        </div>
        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <button
            onClick={onClose}
            className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;

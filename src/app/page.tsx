"use client";

import React, { useState, useEffect } from "react";
import CharacterCard from "./components/CharacterCard";
import CharacterModal from "./components/CharacterModal";
import Filters from "./components/Filters";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";
import { fetchCharacters } from "./services/api";
import useAuth from "./hooks/useAuth";
import Login from "./components/Login";
import "tailwindcss/tailwind.css";
import { CircularProgress } from '@mui/material';

// Define the character interface
interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  films: string[];
  homeworld: string;
  species?: { name: string ,url: string }[];
}

const App: React.FC = () => {
  // State variables to manage characters, loading, error, selected character, etc.
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  // Destructuring authentication functions from useAuth hook
  const { isAuthenticated, login, logout } = useAuth();

  // Fetch characters data when the component mounts or whenever currentPage, searchTerm, filters, or isAuthenticated changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch characters based on the current state values
        const data:any = await fetchCharacters(currentPage, searchTerm, filters);
        setCharacters(data.results);
      } catch (e) {
        setError("Failed to fetch characters");
      } finally {
        setLoading(false);
      }
    };

    // Only fetch data if the user is authenticated
    isAuthenticated && fetchData();
  }, [currentPage, searchTerm, filters, isAuthenticated]);

  // If user is not authenticated, show the login component
  if (!isAuthenticated) {
    return <Login onLogin={login} />;
  }

  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Logout button */}
      <button className="self-end mb-4 p-2 bg-blue-500 text-white rounded" onClick={logout}>
        Logout
      </button>
      <div className="flex flex-1">
        <div className="w-1/4 p-4 border-r border-gray-200">
          {/* Search bar and filters */}
          <SearchBar setSearchTerm={setSearchTerm} />
          <Filters setFilters={setFilters} />
        </div>
        <div className="w-3/4 p-4">
          {/* Loading indicator */}
          {loading && (
            <div className="flex justify-center items-center">
              <CircularProgress />
            </div>
          )}
          {/* Error message */}
          {error && <p>{error}</p>}
          {/* Characters grid */}
          <div className="character-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {characters.map((character) => (
              <CharacterCard
                key={character.name}
                character={character}
                onClick={() => setSelectedCharacter(character)}
              />
            ))}
          </div>
          {/* Pagination controls */}
          {!loading && <Pagination currentPage={currentPage} setPage={setCurrentPage} />}
          {/* Character details modal */}
          {selectedCharacter && (
            <CharacterModal
              character={selectedCharacter}
              onClose={() => setSelectedCharacter(null)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;

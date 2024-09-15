"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter } from 'lucide-react'

interface Option {
  url: string
  name: string
}

interface FiltersProps {
  setFilters: (filters: Record<string, string>) => void
}

export default function Filters({ setFilters }: FiltersProps) {
  const [homeworld, setHomeworld] = useState('')
  const [film, setFilm] = useState('')
  const [species, setSpecies] = useState('')

  // Constants for dropdown options
  const homeworldOptions: Option[] = [
    { url: 'https://swapi.dev/api/planets/1/', name: 'Tatooine' },
    { url: 'https://swapi.dev/api/planets/2/', name: 'Alderaan' },
    { url: 'https://swapi.dev/api/planets/3/', name: 'Yavin IV' },
    { url: 'https://swapi.dev/api/planets/4/', name: 'Hoth' },
    { url: 'https://swapi.dev/api/planets/5/', name: 'Dagobah' },
    { url: 'https://swapi.dev/api/planets/6/', name: 'Bespin' },
    { url: 'https://swapi.dev/api/planets/7/', name: 'Endor' },
    { url: 'https://swapi.dev/api/planets/8/', name: 'Naboo' },
    { url: 'https://swapi.dev/api/planets/9/', name: 'Coruscant' },
    { url: 'https://swapi.dev/api/planets/10/', name: 'Kamino' },


    ]

  const filmOptions: Option[] = [
    { url: 'https://swapi.dev/api/films/1/', name: 'A New Hope' },
    { url: 'https://swapi.dev/api/films/2/', name: 'The Empire Strikes Back' },
    { url: 'https://swapi.dev/api/films/3/', name: 'Return of the Jedi' },
    { url: 'https://swapi.dev/api/films/4/', name: 'The Phantom Menace' },
    { url: 'https://swapi.dev/api/films/5/', name: 'Attack of the Clones' },
    { url: 'https://swapi.dev/api/films/6/', name: 'Revenge of the Sith' },
    { url: 'https://swapi.dev/api/films/7/', name: 'The Force Awakens' },
    { url: 'https://swapi.dev/api/films/8/', name: 'The Last Jedi' },
    { url: 'https://swapi.dev/api/films/9/', name: 'The Rise of Skywalker' },
    { url: 'https://swapi.dev/api/films/10/', name: 'The Force Awakens' },

  ]

  const speciesOptions: Option[] = [
    { url: 'https://swapi.dev/api/species/1/', name: 'Human' },
    { url: 'https://swapi.dev/api/species/2/', name: 'Droid' },
    { url: 'https://swapi.dev/api/species/3/', name: 'Wookie' },
    { url: 'https://swapi.dev/api/species/4/', name: 'Rodian' },
    { url: 'https://swapi.dev/api/species/5/', name: 'Hutt' },
    { url: 'https://swapi.dev/api/species/6/', name: 'Yoda\'s species' },
    { url: 'https://swapi.dev/api/species/7/', name: 'Trandoshan' },
    { url: 'https://swapi.dev/api/species/8/', name: 'Mon Calamari' },
    { url: 'https://swapi.dev/api/species/9/', name: 'Ewok' },
    { url: 'https://swapi.dev/api/species/10/', name: 'Sullustan' },

  ]

  const applyFilters = () => {
    setFilters({ homeworld, film, species })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="filters bg-gray-100 p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Star Wars Filters</h2>
      <div className="space-y-4">
        {/* Homeworld Filter */}
        <div>
          <label htmlFor="homeworld" className="block text-gray-700 font-bold mb-2">Homeworld:</label>
          <select
            id="homeworld"
            value={homeworld}
            onChange={(e) => setHomeworld(e.target.value)}
            className="w-full border-gray-300 rounded-md text-black p-2 "
          >
            <option value="">All Homeworlds</option>
            {homeworldOptions.map((option) => (
              <option key={option.url} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Film Filter */}
        <div>
          <label htmlFor="film" className="block text-gray-700 font-bold mb-2">Film:</label>
          <select
            id="film"
            value={film}
            onChange={(e) => setFilm(e.target.value)}
            className="w-full border-gray-300 rounded-md text-black p-2"
          >
            <option value="">All Films</option>
            {filmOptions.map((option) => (
              <option key={option.url} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        {/* Species Filter */}
        <div>
          <label htmlFor="species" className="block text-gray-700 font-bold mb-2">Species:</label>
          <select
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full border-gray-300 rounded-md text-black p-2"
          >
            <option value="">All Species</option>
            {speciesOptions.map((option) => (
              <option className='text-black' key={option.url} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={applyFilters}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
          >
            <Filter className="mr-2" />
            Apply Filters
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}

'use client'

import axios from "axios";
import { useEffect, useState } from "react";

type PokemonType = {
  name: string;
  url: string;
}

export default function Pokemons() {
  const [pokemons, setPokemons] = useState<PokemonType[]>([]);

  async function getPokemons() {
    try {
      let response = await axios.get('/api/pokemons');
      if (response.status == 200) {
        setPokemons(response.data.data.results);
      }
    } catch (error) {
    }
  }

  useEffect(() => {
    getPokemons();
  }, [])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-xl">here is a list of nice pokemons:</h1>

        <ul className="list-disc">
          {pokemons?.map((pokemon, index) => (
            <li key={index} className="text-lg">{pokemon.name}</li>
          ))}
        </ul>
      </main>
    </div>
  )
}
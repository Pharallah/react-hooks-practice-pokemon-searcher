import React, { useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card, CardContent } from "semantic-ui-react";

function PokemonCollection({
  pokemon,
  setPokemon,
  search
}) {
  // GET REQUEST
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(pokemon => setPokemon(pokemon))
  }, [])
  

  // MAIN DISPLAY (FILTER first then MAP to display)
  const displayPokemon = pokemon.filter(monster => {
    if (search === "") {
      return monster
    }
    if (monster.name.includes(search.toLowerCase())) {
      return monster
    }
  })
  .map(monster => {
    return <PokemonCard
    key={monster.id} 
    name={monster.name}
    hp={monster.hp}
    sprites={monster.sprites}
    />
  })
  
  
  return (
    <Card.Group itemsPerRow={6}>
      {displayPokemon}      
    </Card.Group>
  );
}

export default PokemonCollection;

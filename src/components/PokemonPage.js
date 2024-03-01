import React, { useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  

  
  function onSubmit(newPokemon) {
    setPokemon([
      ...pokemon,
      newPokemon
    ])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      onSubmit={onSubmit}
      />
      <br />
      <Search 
      search={search} 
      setSearch={setSearch}
      />
      <br />
      <PokemonCollection 
      pokemon={pokemon}
      setPokemon={setPokemon}
      search={search}
      />
    </Container>
  );
}

export default PokemonPage;

import { useEffect, useState } from "react";
import api from "../../services/api";
import Button from "../Button";
import Container from "../Container";
import Header from "../Header";
import PokemonCard from "../PokemonCard";

import { List, PokemonItem, ContainerButton } from "./styles";

// fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
//   .then(response => response.json())
//   .then(json => setPokemons(json.results));

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [currentPokemon, setCurrentPokemon] = useState(null);

  useEffect(() => {
    setLoading(true);

    api
      .get("pokemon", {
        params: {
          limit: 151,
          offset: page * 151,
        },
      })
      .then((response) => {
        const { results, next, previous } = response.data;

        setPokemons(results);
        setIsNextDisabled(!next);
        setIsPreviousDisabled(!previous);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  function getPokemon(name) {
    api
      .get(`pokemon/${name}`)
      .then((response) => setCurrentPokemon(response.data));
  }

  return (
    <>
      <Header />
      <Container>
        {currentPokemon && (
          <PokemonItem>
            <img
              src={currentPokemon.sprites.front_default}
              alt={currentPokemon.name}
            />
            <span>{currentPokemon.name}</span>
          </PokemonItem>
        )}

        <ContainerButton>
          <Button
            onClick={() => setPage(page - 1)}
            disabled={isPreviousDisabled}
            backgroundColor="#f10"
          >
            Previous
          </Button>
          <Button
            onClick={() => setPage(page + 1)}
            disabled={isNextDisabled}
            backgroundColor="#f10"
          >
            Next
          </Button>
        </ContainerButton>

        {loading ? (
          <span>Carregando...</span>
        ) : (
          <List>
            {pokemons?.map(({ name }) => (
              <PokemonCard
                key={name}
                name={name}
                onClick={() => getPokemon(name)}
              />
            ))}
          </List>
        )}
      </Container>
    </>
  );
};

export default PokemonList;

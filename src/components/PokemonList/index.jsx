import { useEffect, useState } from 'react';
import api from '../../services/api';
import Button from '../Button';
import Container from '../Container';
import Header from '../Header';
import PokemonCard from '../PokemonCard';

import { List, PokemonItem, ContainerButton } from './styles';

// fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
//   .then(response => response.json())
//   .then(json => setPokemons(json.results));

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit] = useState(500);
  const [isNextDisabled, setIsNextDisabled] = useState(false);
  const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [name, setName] = useState();

  useEffect(() => {
    setLoading(true);

    api.get('pokemon', {
      params: {
        limit,
        offset: offset * limit
      },
    })
      .then(response => {
        const { results, next, previous } = response.data;

        setPokemons(results);
        setIsNextDisabled(!next);
        setIsPreviousDisabled(!previous);
      })
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false)
      });
  }, [offset, limit]);

  useEffect(() => {
    if (name) {
      api.get(`pokemon/${name}`)
        .then((response) =>
          setCurrentPokemon(response.data)
        );
    }
  }, [name]);

  return (
    <>
      <Header />
      <Container>
        {
          currentPokemon &&
          <PokemonItem>
            <img
              src={currentPokemon.sprites.front_default}
              alt={currentPokemon.name}
            />
            <span>{currentPokemon.name}</span>
          </PokemonItem>

        }

        <ContainerButton>
          <Button
            onClick={() => setOffset(offset - 1)}
            disabled={isPreviousDisabled}
            backgroundColor="#f10"
          >
            Previous
          </Button>
          <Button
            onClick={() => setOffset(offset + 1)}
            disabled={isNextDisabled}
            backgroundColor="#f10"
          >
            Next
          </Button>
        </ContainerButton>

        {
          loading
            ? <span>Carregando...</span>
            :
            <List>
              {
                pokemons
                  ?.map(({ name }) =>
                    <PokemonCard
                      key={name}
                      name={name}
                      onClick={() => setName(name)}
                    />
                  )
              }
            </List>
        }

      </Container>
    </>
  );
};

export default PokemonList;

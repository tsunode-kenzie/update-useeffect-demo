import PokemonList from './components/PokemonList';
import Global from './styles/global';

const App = () => {
  return (
    <div className='App'>
      <Global />
      {/* <Counter /> */}
      <PokemonList />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import { Container } from './styles';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('teste');
  }, []);

  function addNumber() {
    setCounter((oldCounter) => oldCounter + 1);
  }

  function subNumber() {
    setCounter(counter - 1);
  }

  return (
    <Container teste='banana' height={100}>
      <p>{counter}</p>
      <div className='teste'>
        <button onClick={addNumber}>+</button>
        <button onClick={subNumber}>-</button>
      </div>
      <div></div>
    </Container>
  );
};

export default Counter;
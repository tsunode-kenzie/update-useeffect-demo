import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  list-style: none;
`;

export const PokemonItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 140px;
  min-height: 150px;
  margin: auto;

  border: 1px solid #f10;
  border-radius: 20px;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ height }) => css`height: ${height}vh;`}

  button {
    width: 60px;
    height: 60px;
    background-color: var(--color-primary);

    border-radius: 50%;
    border: none;

    color: #fff;
    font-size: 25px;
    cursor: pointer;

    &:hover {
      background-color: rgba(174, 108, 47, 0.653);
    }

    & + button {
      margin-left: 15px;
    }

  }
`;
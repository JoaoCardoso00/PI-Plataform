import styled from "styled-components";

export const Container = styled.div`
  padding-top: 2.5rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: var(--background);

  h1 {
    font-size: 2.2rem;
  }
`;

export const SearchContainer = styled.div`
  width: 90%;
  height: 2rem;

  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;

  margin-bottom: 0.6rem;
  margin-top: 2rem;

  button {
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    width: 18rem;
    border-radius: 5px;
    border: none;

    padding: 1rem;

    &::placeholder {
      font-weight: 500;
      opacity: 0.6;
    }
  }
`;

export const ProjectsContainer = styled.div`
  min-width: 90%;
  max-width: calc(100% - 5rem);
  height: 80vh;

  overflow-y: auto;

  background-color: var(--text-font);

  border-radius: 5px;

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 1.2rem;
    gap: 0.5rem;

    @media only screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 550px) {
      grid-template-columns: 1fr;
    }

    .card {
      min-width: 15rem;

      @media (max-width: 800px) {
        & {
          width: 100%;
        }
      }
    }
  }
`;

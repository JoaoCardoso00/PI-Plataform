import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 2.5rem;
  overflow-y: auto;
  overflow-x: auto;

  header {
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      width: 3.125rem;
      height: 3.125rem;
    }

    p {
      font-size: 1rem;
    }

    h1 {
      display: flex;
      text-align: center;
      gap: 0.5rem;
      font-size: 3.125rem;
      font-weight: 600;
      color: var(--title-font);
    }
  }

  div {
    iframe {
      width: 600px;
      height: 300px;
      @media (max-width: 600px) {
        & {
          width: 400px;
        }
      }

      @media (max-width: 400px) {
        & {
          width: 350px;
        }
      }
    }
  }

  .close {
    position: absolute;
    top: -20px;
    right: -20px;
    height: 70px;
    width: 70px;
    z-index: 999;
    border-radius: 50%;
    border: 0;
    background-color: var(--title-font);
    font-size: 30px;
    color: #fefefe;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
  }

  button {
    background: none;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 1500px) {
    padding: 40px;
    text-align: center;
    .close {
      top: 0;
      right: 0;
      color: black;
      background-color: transparent;
    }
  }

  p {
    font-size: 1rem;
  }

  @media (max-width: 800px) {
    header {
      h1 {
        font-size: 40px;
      }
    }

    p {
      font-size: 20px;
    }
    .close {
      top: 0;
      right: 0;
      color: black;
      background-color: transparent;
    }
  }

  a,
  span {
    display: block;
  }

  span {
    margin-bottom: 1.25rem;
  }

  > div {
    margin-top: 2.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 1465px) {
      width: 100%;
      flex-direction: column;
      align-items: center;

      div {
        margin-top: 30px;
        margin-bottom: 20px;
      }
    }
  }
`;

export const Votebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7380f3;
  color: #fefefe;
  width: 500px;
  padding: 2rem 3rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 18.875rem;
    height: 4.75rem;
    margin-top: 1.2em;
    margin-bottom: 0.3em;
    iframe {
      width: 18.75rem;
      height: 18.75rem;
 }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      margin-top: 2rem;
      border: 0;
      padding: 0.625rem;
    }

    button {
      background-color: var(--title-font);
      padding: 8px;
      border: 0;
      color: #fefefe;
      font-size: 20px;
      margin-top: 0.2rem;
    }

    span {
      font-size: 14px;
      margin-top: 10px;
      text-align: center;
    }
  }

  p {
    font-size: 20px;
  }

  @media only screen and (max-width: 600px) {
    form {
      align-items: center;
    }
    input {
      border: 0;
      padding: 0.625rem;
      width: 70%;
    }
    button {
      width: 70%;
    }
  }
`;

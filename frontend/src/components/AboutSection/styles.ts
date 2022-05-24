import styled from "styled-components";

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  text-align: center;
  align-items: center;

  //Primeira div *Responsividade
  img {
    margin: 0.5rem 0 0.75rem 0;
  }

  //Segunda div *Responsividade e deixar ela no final da pagina
  img:nth-child(4) {
    margin-top: 55px;
  }

  h1 {
    font-weight: 700;
    font-size: 36px;

    color: var(--title-font);
  }

  //Div dos conteudos
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin-top: 21px;

    gap: 59px;
  }

  @media only screen and (max-width: 1200px) {
    div {
      justify-content: center;
    }
  }
`;

export const AboutLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  //Deixar mais responsivel
  p {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.25rem;
    margin: 0 2rem 3rem 2rem;

    max-width: 36.5rem;
  }

  iframe {
    width: 600px;
    height: 300px;
    margin: auto;

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
    @media (max-width: 200px) {
      & {
        width: auto;
      }
    }
  }
`;

export const AboutRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  //Deixar Responsivel
  img {
    min-width: 100%;
    max-width: 100%;
  }

  .secondPhoto {
    position: relative;
    left: 5rem;
    bottom: 8rem;

    @media only screen and (max-width: 1120px) {
      left: 0;
      bottom: 0;
      margin-bottom: 2rem;
    }
  }
`;

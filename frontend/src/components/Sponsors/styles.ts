import styled from "styled-components";

export const SponsorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 700;
  color: black;
  padding-bottom: 3rem;

`;

export const Textfield = styled.div`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
  @media (max-width: 1080px) {
    font-size: 2.3rem; // 15px
  }
  @media (max-width: 720px) {
    font-size: 1.2rem; // 14px
  }
`;

export const Brands = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2.5rem;
  width: 100%;

  div {
    display: flex;
    @media (max-width: 1080px) {
            flex-direction: column;
        }
        @media (max-width: 720px) {
            width: 4.2rem;
        }

    img {
      width: 6rem;
      @media (max-width: 1080px) {
            width: 4rem;// 15px
        }
        @media (max-width: 720px) {
            width: 4.2rem;
        }
    }
  }
`;

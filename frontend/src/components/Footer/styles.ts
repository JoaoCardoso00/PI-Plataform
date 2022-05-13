import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 122px 0 108px;

  min-height: 268px;

  background: var(--background);

  @media (max-width: 768px) {
    justify-content: space-around
  }
`;

export const Copyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: .8rem;
    color: var(--title-font);
    text-align: left;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    color: var(--title-font);
    font-weight: 500;
    font-size: 2rem;
    img {
      margin-right: 0.375rem;
      width: 4rem;
      height: 3.4rem;
    }

  @media (max-width: 768px) {

    p{
    text-align: center;
  }
  }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;


`;

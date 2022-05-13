import { FooterContainer, Copyright, SocialMedia } from "./styles";

import Logo from "../../assets/Logo base.png";
import logoInstagram from "../../assets/logoInstagram.svg"
import logoFacebook from "../../assets/logoFacebook.svg"
import logoYoutube from "../../assets/logoYoutube.svg"

export function Footer() {
  return (
    <FooterContainer>
      <Copyright>
        <div className="Logo">
          <img src={Logo} alt="Logo CompAmostra" />
          <a>CompAmostra</a>
        </div>
        <p>
          ©2022 - Cesupa CompAmostra
        </p >
        <p>
          Todos os direitos reservados.
        </p>
      </Copyright>
      <SocialMedia>
        <a href="#">
        <img src={logoInstagram} alt="Logo do Instagram" />
        </a>
        <a href="#">
        <img src={logoFacebook} alt="Logo do Facebook" />
        </a>
        <a href="#">
        <img src={logoYoutube} alt="Logo do Youtube" />
        </a>
      </SocialMedia>
    </FooterContainer>
  );
}

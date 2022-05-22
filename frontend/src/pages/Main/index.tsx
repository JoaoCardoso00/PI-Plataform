import {
  Container,
  IntroductionContent,
  LeftHome,
  IntroductionContentContainer,
} from "./styles";

import { ProjectSection } from '../../components/Projects'

import photoHomePage from "../../assets/photoHomePage.svg";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { Sponsors } from "../../components/Sponsors"; 

import { Link } from "react-scroll";
import AboutSection from "../../components/AboutSection";

export interface Project {
  _id: string;
  image: string;
  title: string;
  description: string;
  participants: string;
  github: string;
  trello: string;
  video: string;
}


export function Main() {
  return (
    <Container>
      <main>
        <Navbar />
        <IntroductionContent>
          <IntroductionContentContainer>
            <LeftHome>
              <span>BOAS-VINDAS A COMPUTAÇÃO AMOSTRA 2022 👋 👋</span>
              <h1>Amazon Hacking</h1>
              <p>
                Universitários elaboram projeto sustentável para Ilha das Onças.
                A CompAmostra reúne uma Amostra Digital dos projetos
                tecnológicos dos graduandos.
              </p>
              <div>
                <Link to="periods" smooth={true}>
                  <button>Ver Projetos</button>
                </Link>
                <Link to="about" smooth={true}>
                  <a href="#">Saiba Mais</a>
                </Link>
              </div>
            </LeftHome>
            <img src={photoHomePage} alt="Vista na ilha das onças" />
          </IntroductionContentContainer>
        </IntroductionContent>
        <AboutSection/>
        <ProjectSection/>
        <Sponsors />
        <Footer />
      </main>
    </Container>
  );
}

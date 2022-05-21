import { useState, useEffect } from "react";

import {
  Container,
  IntroductionContent,
  LeftHome,
  IntroductionContentContainer,
  AboutContent,
  AboutLeft,
  AboutRight,
} from "./styles";

import { ProjectSection } from '../../components/Projects'

import photoHomePage from "../../assets/photoHomePage.svg";
import compAmostraGanhadores1 from "../../assets/compAmostraGanhadores1.svg";
import compAmostraGanhadores2 from "../../assets/compAmostraGanhadores2.svg";
import dividerArrow from "../../assets/dividerArrow.svg";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { api } from "../../services/api";
import { Sponsors } from "../../components/Sponsors"; 

import { Link, Element } from "react-scroll";
import { Periods } from "../../@types";

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
  const [modalOpen, setModalOpen] = useState("none");

  function getTimeRemaining() {
    const endtime = "2022-05-30T23:59:59Z";
    const total = Date.parse(endtime) - Date.parse(new Date().toISOString());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return <p className="vote-timer">{days} Dias</p>;
  }

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

        <AboutContent>
          <Element name="about"></Element>
          <img src={dividerArrow} alt="" />
          <h1>Sobre</h1>
          <div>
            <AboutLeft>
              <p>
                A Estimular alunos do CESUPA ao desenvolvimento de novas
                tecnologias e soluções inovadoras, incentivando o
                desenvolvimento do pensar tecnológico, da criatividade e da
                economia do Estado do Pará. Promover o inter-relacionamento
                entre alunos e empresas de tecnologia do Estado, proporcionando
                panorama favorável a troca de experiências de mercado e soluções
                provindas do conhecimento acadêmico.
                <br />
                <br />A Computação Amostra será realizada no Centro
                Universitário do Estado do Pará (CESUPA), no período de 24 a 27
                de maio de 2022. O evento é iniciativa dos Cursos de Computação
                do Centro Universitário do Pará - CESUPA, o qual objetiva
                divulgar ações e produtos inovadores de TI, focando o
                desenvolvimento científico e econômico da nossa região.
              </p>
              <iframe
                src="https://www.youtube.com/embed/PuRcj4yvfso"
                title="Video Da Computação Amostra"
                allowFullScreen
                height="300"
              ></iframe>
            </AboutLeft>
            <AboutRight>
              {/* Organizar as fotos  */}
              <img src={compAmostraGanhadores1} alt="Foto dos Ganhadores" />
              <img src={compAmostraGanhadores2} alt="Foto dos Ganhadores" />
            </AboutRight>
          </div>
          <img src={dividerArrow} alt="" />
          <Element name="periods"></Element>
        </AboutContent>
        
        <ProjectSection/>
        <Sponsors />
        <Footer />
      </main>
    </Container>
  );
}

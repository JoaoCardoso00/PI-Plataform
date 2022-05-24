import React from "react";
import { AboutContent, AboutLeft, AboutRight } from "./styles";
import dividerArrow from "../../assets/dividerArrow.svg";
import compAmostraGanhadores1 from "../../assets/compAmostraGanhadores1.svg";
import compAmostraGanhadores2 from "../../assets/compAmostraGanhadores2.svg";
import { Element } from "react-scroll";

function About() {
  return (
    <AboutContent>
      <Element name="about"></Element>
      <img src={dividerArrow} alt="" />
      <h1>Sobre</h1>
      <div>
        <AboutLeft>
          <p>
            A Estimular alunos do CESUPA ao desenvolvimento de novas tecnologias
            e soluções inovadoras, incentivando o desenvolvimento do pensar
            tecnológico, da criatividade e da economia do Estado do Pará.
            Promover o inter-relacionamento entre alunos e empresas de
            tecnologia do Estado, proporcionando panorama favorável a troca de
            experiências de mercado e soluções provindas do conhecimento
            acadêmico.
            <br />
            <br />A Computação Amostra será realizada no Centro Universitário do
            Estado do Pará (CESUPA), no período de 24 a 27 de maio de 2022. O
            evento é iniciativa dos Cursos de Computação do Centro Universitário
            do Pará - CESUPA, o qual objetiva divulgar ações e produtos
            inovadores de TI, focando o desenvolvimento científico e econômico
            da nossa região.
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
          <img
            src={compAmostraGanhadores2}
            alt="Foto dos Ganhadores"
            className="secondPhoto"
          />
        </AboutRight>
      </div>
      <img src={dividerArrow} alt="" />
      <Element name="periods"></Element>
    </AboutContent>
  );
}

export default About;

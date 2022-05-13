import React, { useState, useEffect } from "react";

import {
  Container,
  IntroductionContent,
  LeftHome,
  Period,
  Cards,
  Card,
  IntroductionContentContainer,
  AboutContent,
  AboutLeft,
  AboutRight,
} from "./styles";
import Modal from "../../components/Modal";

import paraticImg from "../../assets/paratic2.png";
import omniImg from "../../assets/omni-07.png";
import compAmostraImg from "../../assets/CompAmostra.png";
import cesupaImg from "../../assets/CESUPA-04.png";
import ebiImg from "../../assets/ebi_base_menor_png32.png";
import csConsoftImg from "../../assets/csConsoft.png";
import easyGestorImg from "../../assets/easygestor web 3.png";
import photoHomePage from "../../assets/photoHomePage.svg";
import compAmostraGanhadores1 from "../../assets/compAmostraGanhadores1.svg";
import compAmostraGanhadores2 from "../../assets/compAmostraGanhadores2.svg";
import dividerArrow from "../../assets/dividerArrow.svg";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer"
import { api } from "../../services/api";

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

export interface Periods {
  _id: string;
  title: string;
  description: string;
  projects: Array<Project>;
}

export function Main() {
  const [modalOpen, setModalOpen] = useState("none");
  const [periods, setPeriods] = useState<Periods[] | null>(null);

  useEffect(() => {
    api.get("/periods").then(({ data }) => {
      setPeriods(data);
    });
  }, []);

  function getTimeRemaining() {
    const endtime = "2021-07-20T02:59:59Z";
    const total = Date.parse(endtime) - Date.parse(new Date().toISOString());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return <p className="vote-timer">{days} Dias</p>;
  }

  function openModal(_id: string) {
    // api.post(`/projects/click/${_id}`);

    setModalOpen(_id);

    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setModalOpen("none");

    document.body.style.overflow = "unset";
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
                <button>Ver Projetos</button>
                <a href="#">Saiba Mais</a>
              </div>
            </LeftHome>
            <img src={photoHomePage} alt="Vista na ilha das onças" />
          </IntroductionContentContainer>
        </IntroductionContent>

        <AboutContent>
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
                <br />
                A Computação Amostra será realizada no Centro
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
              ></iframe>
            </AboutLeft>
            <AboutRight>
              {/* Organizar as fotos  */}
              <img src={compAmostraGanhadores1} alt="Foto dos Ganhadores" />
              <img src={compAmostraGanhadores2} alt="Foto dos Ganhadores" />
            </AboutRight>
          </div>
          <img src={dividerArrow} alt="" />
        </AboutContent>

        {periods &&
          periods.map((period) => (
            <Period id={period._id} key={period._id}>
              <h3>{period.title}</h3>
              <p>{period.description}</p>

              <Cards>
                {period.projects.map((project) => (
                  <>
                    <Card onClick={() => openModal(project._id)}>
                      <header>
                        {project.image ? (
                          <img src={project.image} alt={project.title} />
                        ) : (
                          <></>
                        )}
                        <h1>{project.title}</h1>
                      </header>

                      <p>{project.description.slice(0, 220).concat("...")} </p>
                    </Card>

                    <Modal
                      project={project}
                      isOpen={modalOpen === project._id}
                      close={closeModal}
                    />
                  </>
                ))}
              </Cards>
            </Period>
          ))}
  
        <Footer />

      </main>
    </Container>
  );
}

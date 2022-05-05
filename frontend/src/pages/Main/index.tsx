import React, { useState, useEffect } from "react";

import { Container, IntroductionContent, Period, Cards, Card } from "./styles";
import Sidebar from "../../components/Sidebar";
import Modal from "../../components/Modal";

import paraticImg from "../../assets/paratic2.png";
import omniImg from "../../assets/omni-07.png";
import compAmostraImg from "../../assets/CompAmostra.png";
import cesupaImg from "../../assets/CESUPA-04.png";
import ebiImg from "../../assets/ebi_base_menor_png32.png";
import csConsoftImg from "../../assets/csConsoft.png";
import easyGestorImg from "../../assets/easygestor web 3.png";

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
  name: string;
  description: string;
  projects: Array<Project>;
}

export function Main() {
  const [modalOpen, setModalOpen] = useState("none");
  const [periods, setPeriods] = useState<Periods[] | null>([
    {
      _id: "1",
      name: "primeiro",
      description: "primeiro periodo",
      projects: [
        {
          _id: "1",
          image:
            "https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2021/05/21/pikachu-preso-anime.jpeg",
          title: "pikachu foda",
          description: "pikachu é mto brabo",
          participants: "participante1, 2, 3",
          github: "github.com",
          trello: "trello.com",
          video:
            "https://www.youtube.com/watch?v=ZhstyJSNKME&t=166s&ab_channel=CORTESCANHOTOS",
        },
      ],
    },
  ]);

  useEffect(() => {
    // api.get('/periods').then(({ data }) => {
    //   console.log(data);
    //   setPeriods(data);
    // })
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
      <Sidebar periods={periods} />

      <main>
        <IntroductionContent>
          <img
            src={compAmostraImg}
            alt="Computacao Amostra"
            className="softamostra-logo"
          />

          <p>
            O portal da Computação Amostra reúne uma Amostra Digital dos
            projetos tecnológicos dos graduandos do 3º, 5º e 7º períodos do
            curso de{" "}
            <strong>Bacharelado em Ciência da Computação do CESUPA</strong>.
          </p>

          <p className="text">
            A COVID-19 impactou profundamente todos os setores da economia, e em
            especial o setor do varejo. Diversas empresas varejistas tiveram que
            repensar seus modelos de negócios e buscar por inovação. Em tempos
            difíceis, os desafios trazem oportunidades a todo instante. Entramos
            em uma nova década do séc. XXI vivenciando uma intensa transformação
            digital, a humanidade se uniu em uma revolução científica,
            disruptiva e de superação. É tempo de repensarmos a tecnologia para
            novos valores, nos reconectando como sociedade.
          </p>

          <p>
            <b>É tempo de Reconectar!!!</b>
          </p>

          <p className="box">
            <strong>Ajude-nos a escolher os melhores projetos!</strong>
          </p>

          <p>
            Para isso, basta selecionar o período da turma e votar na melhor
            proposta para o mercado.
          </p>

          <a href="https://www.cesupa.br/Graduacao/Exatas/bcc.asp">
            Quer saber mais sobre o curso de Ciência da Computação? Clique aqui
          </a>

          <p>Conheça mais sobre a Computação Amostra:</p>
          <div className="comp-amostra">
            <iframe
              width="700px"
              height="400px"
              frameBorder="0"
              src="https://www.youtube.com/embed/PuRcj4yvfso"
              title="Computação Amostra"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="vote-timer">
            <label>A votação acaba em</label>
            {getTimeRemaining()}
          </div>

          <section>
            <p>APOIO</p>

            <div>
              <a href="http://www.paratic.com.br/">
                <img src={paraticImg} alt="PARATIC" />
              </a>
              <a href="https://omnicesupa.com">
                <img src={omniImg} alt="OMNI" />
              </a>
              <a href="http://www.cs-consoft.com.br/">
                <img src={csConsoftImg} alt="CS-CONSOFT" />
              </a>
              <a href="http://ebi.com.br/">
                <img src={ebiImg} alt="EBI" />
              </a>
              <a href="https://easygestor.com/">
                <img src={easyGestorImg} alt="EASY GESTOR" />
              </a>
            </div>
          </section>

          <img src={cesupaImg} alt="CESUPA" className="cesupa-logo" />
        </IntroductionContent>

        {periods?.map((period) => (
          <Period id={period._id} key={period._id}>
            <h3>{period.name}</h3>
            <p>{period.description}</p>

            <Cards>
              {period.projects.map((project) => (
                <React.Fragment key={project._id}>
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
                </React.Fragment>
              ))}
            </Cards>
          </Period>
        ))}
      </main>
    </Container>
  );
}

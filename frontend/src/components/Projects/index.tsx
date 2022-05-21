import React, { useEffect, useState } from "react";
import { Card, Container, ProjectsContainer, SearchContainer } from "./styles";
import { Project } from "../../@types";
import { api } from "../../services/api";
import Modal from "../../components/Modal";
import lupaImg from "../../assets/Lupa.svg";
import filterImg from "../../assets/Filter.svg";

export function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [modalOpen, setModalOpen] = useState<string>("none");

  useEffect(() => {
    api.get("/projects").then(({ data }) => setProjects(data));
  }, []);

  const openCloseModal = async (_id: string) => {
    await api.post(`/projects/click/${_id}`);
    console.log(projects);
    setModalOpen((state) => (state = modalOpen === "none" ? _id : "none"));

    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen((state) => (state = "none"));

    document.body.style.overflow = "unset";
  };

  return (
    <Container>
      <h1>Projetos</h1>

      <SearchContainer>
        <input type="text" placeholder="Search Project" />
        <button>
          <img src={filterImg} alt="hambuguer" />
        </button>
        <button>
          <img src={lupaImg} alt="lupa" />
        </button>
      </SearchContainer>

      <ProjectsContainer>
        {projects &&
          projects.map((project: Project) => {
            return (
              <>
                <Card
                  key={project._id}
                  onClick={() => openCloseModal(project._id)}
                >
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
            );
          })}
      </ProjectsContainer>
    </Container>
  );
}

import React, { useEffect, useState } from "react";
import { Container, ProjectsContainer, SearchContainer } from "./styles";
import { Project } from "../../@types";
import { api } from "../../services/api";
import Modal from "../../components/Modal";
import lupaImg from "../../assets/Lupa.svg";
import filterImg from "../../assets/Filter.svg";
import Skeleton from "@mui/material/Skeleton";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export function ProjectSection() {
  const [projects, setProjects] = useState<Project[]>();
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
        <div className="container">
          {!projects && (
            <Skeleton
              sx={{ bgcolor: "white", opacity: 0.5 }}
              variant="rectangular"
              width={500}
              height={300}
            />
          )}
          {projects &&
            projects.map((project: Project) => {
              return (
                <>
                  <Card className="neumorphismCard border-none shadow-black aspect-video min-h-fit flex flex-col justify-around m-2 sm:h-1/4 sm:w-full md:w-1/4 lg:w-72">
                    <CardContent className="flex justify-between">
                      <div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="h2"
                          className="title"
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                          className="desc"
                        >
                          {project.description}
                        </Typography>
                      </div>
                    </CardContent>
                    <CardActions className="flex justify-end">
                        <Button
                          size="small"
                          color="primary"
                          className="neumorphismButton font-semibold mr-4"
                        >
                          Ver Mais
                        </Button>
                    </CardActions>
                  </Card>

                  <Modal
                    project={project}
                    isOpen={modalOpen === project._id}
                    close={closeModal}
                  />
                </>
              );
            })}
        </div>
      </ProjectsContainer>
    </Container>
  );
}

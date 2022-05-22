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
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    api.get("/projects").then(({ data }) => setProjects(data));
    
  }, []);

  const filterProjects = async (filterParam: string) => {
    const { data: all_projects } = await api.get("/projects");
    console.log(projects);

    const filtered_projects = all_projects?.filter(
      (element: Project) =>
        element.description.toLowerCase().includes(filterParam.toLowerCase()) ||
        element.title.toLowerCase().includes(filterParam.toLowerCase()) ||
        element.participants.toLowerCase().includes(filterParam.toLowerCase())
    );
    setProjects((state) => (state = filtered_projects));
  };

  const openModal = async (_id: string) => {
    await api.post(`/projects/click/${_id}`);
    setModalOpen((state) => (state = _id));

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
        <input
          type="text"
          onChange={(e) => {
            setFilter((state) => (state = e.target.value));
          }}
          placeholder="Search Project"
        />
        <button
          onClick={async () => {
            await filterProjects(filter);
          }}
        >
          <img src={lupaImg} alt="lupa" />
        </button>
      </SearchContainer>

      <ProjectsContainer>
        <div className="container">
          {!projects && (
            <>
              <Skeleton
                sx={{ bgcolor: "white", opacity: 0.5 }}
                variant="rectangular"
                width={500}
                height={300}
              />
              <Skeleton
                sx={{ bgcolor: "white", opacity: 0.5 }}
                variant="rectangular"
                width={500}
                height={300}
              />
              <Skeleton
                sx={{ bgcolor: "white", opacity: 0.5 }}
                variant="rectangular"
                width={500}
                height={300}
              />
              <Skeleton
                sx={{ bgcolor: "white", opacity: 0.5 }}
                variant="rectangular"
                width={500}
                height={300}
              />
              <Skeleton
                sx={{ bgcolor: "white", opacity: 0.5 }}
                variant="rectangular"
                width={500}
                height={300}
              />
            </>
          )}
          {projects &&
            projects.map((project: Project) => {
              
              setTimeout(() => {}, 1000)

              return (
                <>
                  <Card className="card">
                    <CardContent className="cardContent">
                      <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {project.description.slice(0, 66) + "..."}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        onClick={async () => {
                          await openModal(project._id);
                        }}
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

import React, { useCallback, useState } from "react";
import { FaTable } from "react-icons/fa";

import { api } from "../../services/api";

import { Container, Projects, AuthBox } from "./styles";
import softImg from "../../assets/softamostra-curvas-03.svg";

interface ProjectVotes {
  _id?: string;
  title: string;
  totalVotes: Number;
  uniqueVotes: Number;
  views: Number;
}

export function Dashboard() {
  const [authKey, setAuthKey] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [projects, setProjects] = useState([
    { _id: "awda", title: "projeto1", totalVotes: 5, uniqueVotes: 3, views: 8 },
    { _id: "awda", title: "projeto2", totalVotes: 3, uniqueVotes: 1, views: 8 },
  ] as ProjectVotes[]);
  const [filter, setFilter] = useState("total");

  const handleAuthSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const response = await api.get(`/votes?filter=${filter}`, {
          headers: {
            "X-API-KEY": authKey,
          },
        });

        setErrorMessage("");
        setProjects(response.data.projects);
        setIsAuth(true);
      } catch (error) {
        setErrorMessage("Chave de acesso invalida");
      }
    },
    [authKey, filter]
  );

  const handleSortChange = useCallback(
    async (type: string) => {
      setFilter(type);

      const response = await api.get(`/votes?filter=${type}`, {
        headers: {
          "X-API-KEY": authKey,
        },
      });

      setProjects(response.data.projects);
    },
    [authKey]
  );

  const getProjectVotesTable = useCallback(
    async (id: string | undefined, title: string | undefined) => {
      const response = await api.get(`/votes/${id}/emails`, {
        responseType: "blob",
        method: "GET",
        headers: {
          "X-API-KEY": authKey,
        },
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${title}.xlsx`);
      document.body.appendChild(link);
      link.click();
    },
    [authKey]
  );

  return (
    <Container>
      {isAuth ? (
        <>
          <header>
            <h1>Resultados SoftAmostra 2020</h1>

            <p>
              Visualização de todos os projetos presentes na SoftAmostra 2020.
              Verifique e organize os projetos do jeito que for mais
              conveniente. Quando clicado em um projeto, você verá mais
              informações sobre os projetos, assim como todos os email únicos
              usados para votar.
            </p>

            <h2>Organizar por</h2>
            <div>
              <label htmlFor="total" onClick={() => handleSortChange("total")}>
                <input
                  type="radio"
                  value="total"
                  checked={filter === "total"}
                  onChange={() => {}}
                />
                Votos totais
              </label>

              <label
                htmlFor="unique"
                onClick={() => handleSortChange("unique")}
              >
                <input
                  type="radio"
                  value="unique"
                  checked={filter === "unique"}
                  onChange={() => {}}
                />
                Votos únicos
              </label>
            </div>
          </header>

          <Projects>
            <section id="table-header">
              <p>Projeto</p>
              <p>Votos totais</p>
              <p>Votos únicos</p>
              <p>Visualizações</p>
              <p>Tabela de emails</p>
            </section>

            {projects.map((project) => (
              <section
                id="table-project"
                key={project._id}
                onClick={() =>
                  getProjectVotesTable(project?._id, project?.title)
                }
              >
                <p>{project.title}</p>
                <p>{project.totalVotes.toString()}</p>
                <p>{project.uniqueVotes.toString()}</p>
                <p>{project.views.toString()}</p>
                <p>
                  <FaTable size={25} color="#000" />
                </p>
              </section>
            ))}
          </Projects>
        </>
      ) : (
        <AuthBox>
          <img src={softImg} alt="SoftAmostra" />
          <h2>RESULTADOS</h2>

          <form onSubmit={handleAuthSubmit}>
            <input
              type="password"
              placeholder="Chave de acesso"
              value={authKey}
              onChange={(e) => setAuthKey(e.target.value)}
            />

            <button type="submit">Enviar</button>
          </form>

          <span>{errorMessage}</span>
        </AuthBox>
      )}
    </Container>
  );
}

import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import * as Yup from "yup";
import "./styles.css";

import { Container, Votebox } from "./styles";

import { api } from "../../services/api";

import ReCAPTCHA from "react-google-recaptcha";
import { Project } from "../../@types";
import githubLogo from "../../assets/github.png";

interface ModalProps {
  project: Project;
  isOpen: boolean;
  close: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, isOpen, close }) => {
  const [email, setEmail] = useState("");
  const [isValidated, setIsValidated] = useState(false);

  useEffect(() => {
    ReactModal.setAppElement("body");
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
      });

      await schema.validate(
        { email },
        {
          abortEarly: false,
        }
      );

      await api.post("/votes", {
        email,
        projectId: project._id,
      });

      setEmail("");
      alert("Voto feito com sucesso!");
    } catch (err) {
      alert(
        "E-mail incorreto, ou ocorreu um erro com o servidor. Tente novamente."
      );
    }
  }

  return (
    <>
      <ReactModal
        isOpen={isOpen}
        className="modal"
        onRequestClose={close}
        overlayClassName="background"
      >
        <Container>
          <header>
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <></>
            )}
            <h1>{project.title}</h1>
            
            <br />
            <p>{project.participants}</p>
          </header>
          <button>
              <a href={project.github}>
                <img src={githubLogo} alt="github" width={50} />
              </a>
            </button>
          <p>{project.description}</p>

          <div>
            <iframe
              title={`${project._id}`}
              src={project.video}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <Votebox>
              <h1>VOTE AQUI</h1>
              <p>Insira o seu email* para realizar a votação desse projeto</p>
              <ReCAPTCHA
                sitekey="6LeQOu4fAAAAALPBe60k29AJbnumrCopWclKbinP"
                onChange={() => {
                  setIsValidated(true);
                }}
              />
              <form onSubmit={handleSubmit}>
                <input
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                />
                <button type="submit" disabled={!isValidated}>
                  VOTAR
                </button>

                <span>* Só será valido 1 voto por email</span>
              </form>
            </Votebox>
          </div>

          <button className="close" type="button" onClick={close}>
            X
          </button>
        </Container>
      </ReactModal>
    </>
  );
};

export default Modal;

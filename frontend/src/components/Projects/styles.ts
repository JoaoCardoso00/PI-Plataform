import styled from "styled-components";

export const Container = styled.div`
    padding-top: 2.5rem;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--background);
    
    h1 {
        font-size: 2.2rem;
    }
`

export const SearchContainer = styled.div`
    width: 90%;
    height: 2rem;

    display: flex;
    justify-content: flex-end;
    gap: .4rem;

    margin-bottom: .6rem;
    margin-top: 2rem;

    button {
        background: none;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 18rem;
        border-radius: 5px;
        border: none;
        
        padding: 1rem;

        &::placeholder {
            font-weight: 500;
            opacity: .6;
        }
    }

`

export const ProjectsContainer = styled.div`
    min-width: 90%;
    max-width: calc(100% - 5rem);
    height: 80vh;

    display: flex;
    flex-wrap: wrap;

    justify-content: space-around;

    background-color: var(--text-font);

    padding: 1.2rem;

    border-radius: 5px;

    .container {
        width: 90%;
        height: 90vh;
    }

`

export const Card = styled.div`
    background-color: var(--title-font);
    width: 35%;
    height: 12rem;
    min-height: 5rem;

    h1, p {
        color: var(--text-secondary);
    }
`
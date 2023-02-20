import React from 'react'
import {Container, Header, Link, Logo} from "../gotiApp/components/App.styled";
import {About} from "./pages/About";
import {ContactMe} from "./pages/ContactMe";
import {Projects} from "./pages/Projects";
import {ProjectPage} from "./pages/ProjectPage";
import { Routes, Route } from 'react-router-dom'

// 1. Dodać router
// 2. Wydzielić layout
// 3. Podpiąć 4 strony - about, contact, projects, project page
// 4. Umożliwić nawigację z listy projektów do strony projektu
// 5. Wyświetlać projekt na stronie projektu

export const Starter = () => {
    return (
        <Container>
            <Header>
                <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{" "}
                    GoMerch Store
                </Logo>
                <nav>
                    <Link to={'about'}>
                        About
                    </Link>
                    <Link to={'contact'}>Contact me</Link>
                    <Link to={'projects'}>Projects</Link>
                </nav>
            </Header>
            <Routes>
                <Route path={'about'} element={<About/>} />
                <Route path={'contact'} element={<ContactMe/>} />
                <Route path={'projects'} element={<Projects/>} />
                <Route path={'projects/:projectId'} element={<ProjectPage/>} />
                <Route path={'*'} element={<h1>Page not found</h1>} />
            </Routes>
        </Container>
    )
}
import React from 'react'
import {Container, Header, Link, Logo} from "../gotiApp/components/App.styled";

// Wymagania do aplikacji
// Dodać do App.js BrowserRouter
// Przygotować shared layout dla startera
// Aplikacja ma 3 podstawowe trasy - /about-me, /contact-me, /projects
// W /projects po naciśnięciu na projekt chce być przeniesiony do strony z projektem (wykorzystać useParams)

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
                    <Link>
                        About
                    </Link>
                    <Link >Contact me</Link>
                    <Link>Projects</Link>
                </nav>
            </Header>
        </Container>
    )
}
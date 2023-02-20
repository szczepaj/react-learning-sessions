import React from 'react'
import {Container, Header, Link, Logo} from "./App.styled";
import { Outlet } from 'react-router-dom'

export const Layout = ({ children }) => {
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
                    <Link to="/" end>
                        Home
                    </Link>
                    <Link to="/planet">Planet App</Link>
                    <Link to="/factorial">Calculate Factorial</Link>
                    <Link to="/about">About</Link>
                </nav>
            </Header>
            {children}
        </Container>
    )
}
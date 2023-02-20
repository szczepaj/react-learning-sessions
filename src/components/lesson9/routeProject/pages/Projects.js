import React from 'react'
import { Link } from 'react-router-dom'
import {getProjects} from "../../projects/fakeApi";

export const Projects = () => {
    const projects = getProjects()
    return (
        <main>
            <h1>projects page</h1>
            <ul>
                {projects.map(proj => (
                   <li key={proj.id}>
                       <Link to={`${proj.id}`}>
                       {proj.name}
                       </Link>
                   </li>
                ))}
            </ul>
        </main>
    );
};

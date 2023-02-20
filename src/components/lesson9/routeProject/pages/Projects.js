import React from 'react'
import {getProjects} from "../../projects/fakeApi";

export const Projects = () => {
    const projects = getProjects()
    return (
        <main>
            <h1>projects page</h1>
            <ul>
                {projects.map(proj => (
                   <li key={proj.id}>{proj.name}</li>
                ))}
            </ul>
        </main>
    );
};

import React from 'react'
import {getProjectById} from "./fakeApi";

export const AboutProject = () => {
    const id = 1
    const project = getProjectById(id)

    return (
        <div>
            <h1>{project.name}</h1>
            <h3>{project.description}</h3>
        </div>
    )
}
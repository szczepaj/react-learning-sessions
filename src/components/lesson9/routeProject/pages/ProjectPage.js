import React from 'react'
import { useParams } from 'react-router-dom'
import {getProjectById} from "../../projects/fakeApi";

export const ProjectPage = () => {
    const {projectId} = useParams()
    const project = getProjectById(Number(projectId))

    return (
        <div>
            {project && (
                <>
                    <h1>{project.name}</h1>
                    <h3>{project.description}</h3>
                </>
            )}
            {!project && <h2>Project not found</h2>}
        </div>
    )
}
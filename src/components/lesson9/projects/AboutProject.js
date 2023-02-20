import React from 'react'
import {getProjectById} from "./fakeApi";
import {useParams} from "react-router-dom";

export const AboutProject = () => {
    const { projectId } = useParams()
    const project = getProjectById(Number(projectId))

    return (
        <div>
            {project && (
                <>
                    <h1>`{project.name}</h1>
                    <h3>`{project.description}</h3>
                </>
            )}
            {!project && (<h2>Sorry, project not found</h2>)}
        </div>
    )
}
import React from 'react';


type CardProps = {
    name: string,
    creationDate: Date,
    status: string
}

export const ProjectCard = ({name, creationDate, status}: CardProps) => <aside>
    <h3>{name}</h3>
    <h4>{creationDate}</h4>
    <h4>{status}</h4>
</aside>
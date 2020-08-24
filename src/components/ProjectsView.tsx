import React, { FunctionComponent } from 'react';
import useProjectsService from '../services/useProjectsService';
import { ProjectCard } from './ProjectCard';

const ProjectsView: FunctionComponent<{}> = () => {
    const service = useProjectsService();
    return (
        <div>
            {service.status === 'loaded' && 
            service.payload.results.map(project => (
                <ProjectCard data={project} />
            ))}
        </div>
    )
} 

export default ProjectsView;
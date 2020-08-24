import React, { FunctionComponent } from 'react';
import useProjectsService from '../services/useProjectsService';
import { ProjectCard } from './ProjectCard';

const ProjectsView: FunctionComponent<{}> = () => {
    const service = useProjectsService();
    console.log(service)
    return (
        <div>
            {
                service.status === 'loading' && <div>Loading...</div>
            }
            {
            service.status === 'loaded' && service.payload &&
            service.payload.data.map((project,i) => (
                <ProjectCard key={i} data={project} />
            ))
            }
        </div>
    )
} 

export default ProjectsView;
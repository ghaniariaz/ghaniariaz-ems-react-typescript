import React, { FunctionComponent } from 'react';
import useProjectsService from '../services/useProjectsService';
import { ProjectCard } from './ProjectCard';

const ProjectsView: FunctionComponent<{}> = () => {
    const service = useProjectsService();
    return (
        <div>
            {
                service.status === 'loading' && <div>Loading...</div>
            }
            {
            service.status === 'loaded' && service.payload &&
            service.payload.data.map((project: any) => (
                <ProjectCard key={project.id} data={project} />
            ))
            }
            {
                service.status === 'error' && <div>Error!!</div>
            }
        </div>
    )
} 

export default ProjectsView;
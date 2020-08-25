import React, { FunctionComponent } from 'react';
import useProjectsService from '../services/useProjectsService';
import ProjectsGrid from '../components/ProjectsGrid';

const ProjectsView: FunctionComponent<{}> = () => {
    const service = useProjectsService();
    return (
        <div>
            {
                service.status === 'loading' && <div>Loading...</div>
            }
            {
                service.status === 'loaded' && service.payload &&
                <ProjectsGrid results={service.payload} />
            }
            {
                service.status === 'error' && <div>Error!!</div>
            }
        </div>
    )
} 

export default ProjectsView;
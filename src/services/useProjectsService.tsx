import {useEffect, useState} from 'react';
import {Project} from '../types/Project';
import {Service} from '../types/Service';

export interface Projects {
    results: Project[];
}

const useProjectsService = () => {
    const [result, setResult] = useState<Service<Projects>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch('http://localhost:3004/projects')
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }, [])

    return result;
}

export default useProjectsService;
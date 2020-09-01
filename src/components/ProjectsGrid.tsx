import React, { FunctionComponent, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { ProjectCard } from './ProjectCard';
import {Project} from '../types/Project';
import {Projects} from '../services/useProjectsService';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  }),
);

const moment = require('moment');
var _ = require('lodash');
export const sortArray = (projects: Project[], sortProperty: string) => {
  return _.orderBy(projects, function(project: any) {
    return new moment(project.creationDate)
  }, [sortProperty]);
};

const ProjectsGrid: FunctionComponent<Projects> = ({results}) => {
    const classes = useStyles();  
    const [data, setData] = useState(results); 
    return (
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Button variant="contained" color="primary" onClick={() => { setData(sortArray(data, 'asc')) }}>ASC</Button>
              <Button variant="contained" color="primary" onClick={() => { setData(sortArray(data, 'desc')) }}>DESC</Button>
            </Grid>
            <Grid item xs={11}>
              <Grid container spacing={2}>
                  {
                      data && data.map((project: any) => (
                          <Grid item xs={6} sm={3}>
                          <ProjectCard key={project.id} data={project} />
                          </Grid>
                      ))
                  }
              </Grid>
            </Grid>
          </Grid>        
        </div>
    );
}

export default ProjectsGrid;
import React, { FunctionComponent } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ProjectCard } from './ProjectCard';
import {Projects} from '../services/useProjectsService';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    }
  }),
);

const ProjectsGrid: FunctionComponent<Projects> = ({results}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container spacing={2}>
                {
                    results && results.map((project: any) => (
                        <Grid item xs={6} sm={3}>
                        <ProjectCard key={project.id} data={project} />
                        </Grid>
                    ))
                }
        </Grid>
        </div>
    );
}

export default ProjectsGrid;
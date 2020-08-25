import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

type CardProps = {
    data: {
        projectName: string;
        creationDate: string;
        status: string;
        id: string;
    };
}

const useStyles = makeStyles({
    root: {
        maxWidth: 375,
    }
});

export const ProjectCard: FunctionComponent<CardProps> = ({ data }) => {
    const classes = useStyles();
    return (
        <Card id={data.id} className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {data.projectName}
                </Typography>
                <Typography color="textSecondary" component="p">
                    {new Date(data.creationDate).toString()}
                </Typography>
                <Typography color="textSecondary" component="p">
                    <b>{data.status}</b>
                </Typography>
            </CardContent>
        </Card>
    );

}
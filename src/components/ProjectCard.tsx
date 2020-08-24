import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

type CardProps = {
    name: string,
    creationDate: Date,
    status: string
}

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    }
});

export const ProjectCard: FunctionComponent<CardProps> = ({ name, creationDate, status }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography color="textSecondary" component="p">
                    {creationDate}
                </Typography>
                <Typography color="textSecondary" component="p">
                    {status}
                </Typography>
            </CardContent>
        </Card>
    );

}
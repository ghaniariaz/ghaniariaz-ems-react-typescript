import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

type CardProps = {
    data: {
        name: string;
        creationDate: Date;
        state: string;
    };
}

const useStyles = makeStyles({
    root: {
        maxWidth: 275,
    }
});

export const ProjectCard: FunctionComponent<CardProps> = ({ data }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {data.name}
                </Typography>
                <Typography color="textSecondary" component="p">
                    {data.creationDate}
                </Typography>
                <Typography color="textSecondary" component="p">
                    {data.state}
                </Typography>
            </CardContent>
        </Card>
    );

}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

type CardProps = {
    name: string,
    creationDate: Date,
    status: string
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export const ProjectCard = ({name, creationDate, status}: CardProps) => <aside>
    <h3>{name}</h3>
    <h4>{creationDate}</h4>
    <h4>{status}</h4>
</aside>
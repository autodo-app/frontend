import React from 'react';
import { makeStyles, IconButton, ButtonBase } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import Checkbox from '@material-ui/core/Checkbox';
import Create from '@material-ui/icons/Create';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import { red } from '@material-ui/core/colors';
import { LateChip, DueSoonChip } from './status-chips';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1),
  },
  status: {
    backgroundColor: red[400],
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  todoDescription: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  todoName: {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dueMileage: {
    fontSize: '1.1rem',
    fontWeight: '500',
  },
  buttons: {
    marginLeft: 'auto',
  },
}));

const CarTag = () => {
  return (
    <ButtonBase>
      <Chip color="primary" label="2009 Passat" />
    </ButtonBase>
  );
};

export default function TodoItem({ dueState }) {
  const classes = useStyles();

  let chip = <div />;
  if (dueState === 'late') {
    chip = <LateChip />;
  } else if (dueState === 'dueSoon') {
    chip = <DueSoonChip />;
  }

  return (
    <div className={classes.root}>
      <Checkbox />
      {chip}
      <div className={classes.todoDescription}>
        <span className={classes.todoName}>Oil Change</span> Due at{' '}
        <span className={classes.dueMileage}>63502</span> mi
      </div>
      <div className={classes.buttons}>
        <CarTag />
        <IconButton>
          <Create />
        </IconButton>
        <IconButton>
          <DeleteOutline />
        </IconButton>
      </div>
    </div>
  );
}

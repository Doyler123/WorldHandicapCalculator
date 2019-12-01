import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputFields from './InputFields'

const useStyles = makeStyles(theme => ({
  
}));

export default function HandicapInfo(props) {
  const classes = useStyles();

  return (
        <Grid item xs={12}>
          <InputFields />
        </Grid>
  );
}
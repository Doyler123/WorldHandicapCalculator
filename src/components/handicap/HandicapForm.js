import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ErrorHandleTextField} from '../widgets/forms/CustomFormInputs'
import Constants from '../../constants'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const ScoreFields = ({roundNumber, formState, inputs, classes, validateField}) => {
    
    return (
        <Grid item sm={12} >
            <ErrorHandleTextField
                formState={formState}
                text={inputs.text}
                name={Constants.GROSS + roundNumber}
                label={`Round ${roundNumber} Gross`}
                fullWidth={false}
                required={false}
                validate={(value) => validateField(value)}
                className={classes.textField}
                variant="outlined"
            />

            <ErrorHandleTextField
                formState={formState}
                text={inputs.text}
                name={Constants.CSS + roundNumber}
                label={`CSS`}
                fullWidth={false}
                required={false}
                validate={(value) => validateField(value)}
                className={classes.textField}
                variant="outlined"
            />
        </Grid>
    )
}

export default function InputFields({formState, inputs, validateField, onClickCalculate}) {

  const classes = useStyles();

  return (
    <form className={classes.container} autoComplete={false}>
      <Grid container >
      <Grid item sm={12} >
        <ErrorHandleTextField
                formState={formState}
                text={inputs.text}
                name={Constants.SSS}
                label={`CR or SSS`}
                fullWidth={false}
                required={true}
                validate={(value) => validateField(value)}
                className={classes.textField}
                variant="outlined"
            />

            <ErrorHandleTextField
                formState={formState}
                text={inputs.text}
                name={Constants.SLOPE}
                label={`Slope`}
                fullWidth={false}
                required={false}
                validate={(value) => validateField(value)}
                className={classes.textField}
                variant="outlined"
            />  
      </Grid>
      <Grid item sm={12} >
        <Divider style={{marginTop : '10px'}} component={'div'} variant={"middle"}/> 
      </Grid>
        {Object.keys(formState.values).filter( value => value.startsWith(Constants.GROSS)).map( (key, index) => (
            <ScoreFields 
              roundNumber={index + 1} 
              formState={formState} 
              inputs={inputs} 
              classes={classes} 
              validateField={validateField}/>
        ))}
      </Grid>
      <Grid item sm={12} >
        <Button
            variant="contained"
            color="primary"
            onClick={() => {console.log(onClickCalculate(formState.values))}}
            className={classes.button}
            >
                {"Calculate"}
        </Button> 
      </Grid>
    </form>
  );
}
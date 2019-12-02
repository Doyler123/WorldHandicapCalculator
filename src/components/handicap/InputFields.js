import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useFormState } from 'react-use-form-state';
import {ErrorHandleTextField} from '../widgets/forms/CustomFormInputs'
import Constants from '../../constants'
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import * as util from '../../util/handicapUtil';
import createPersistedState from 'use-persisted-state';


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
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const useStoredDataState = createPersistedState(Constants.SESSION_STORAGE_KEY, global.sessionStorage);

const calculate = (values) => {
    return util.calculateHandicap(values)
}

const validateField = (value, values, setStoredData,) => {
    if(isNaN(value)){
        return "Not a number"
    }

    setStoredData({...values})

    return true
}

const ScoreFields = ({roundNumber, formState, inputs, classes, setStoredData}) => {
    
    return (
        <Grid item sm={12} >
            <ErrorHandleTextField
                formState={formState}
                text={inputs.text}
                name={Constants.GROSS + roundNumber}
                label={`Round ${roundNumber} Gross`}
                fullWidth={false}
                required={false}
                validate={(value) => validateField(value, formState.values, setStoredData)}
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
                validate={(value) => validateField(value, formState.values, setStoredData)}
                className={classes.textField}
                variant="outlined"
            />
        </Grid>
    )
}

const getInitialState = (storedData) => {

    if(!Object.keys(storedData).length > 0){
        var newState = {}
    
        var numRounds = Constants.NUM_ROUNDS;
    
        for(var i=1; i <= numRounds; i++){
            newState[Constants.GROSS + i] = ""
            newState[Constants.CSS + i]   = ""
        }
        return newState
    }

    return storedData

}

export default function InputFields() {

  const [ storedData, setStoredData ] = useStoredDataState({})
    
  const classes = useStyles();

  const [formState, inputs] = useFormState(getInitialState(storedData));

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
                validate={(value) => validateField(value, formState.values, setStoredData)}
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
                validate={(value) => validateField(value, formState.values, setStoredData)}
                className={classes.textField}
                variant="outlined"
            />  
      </Grid>
      <Grid item sm={12} >
        <Divider style={{marginTop : '10px'}} component={'div'} variant={"middle"}/> 
      </Grid>
        {Object.keys(formState.values).filter( value => value.startsWith(Constants.GROSS)).map( (key, index) => (
            <ScoreFields roundNumber={index + 1} formState={formState} inputs={inputs} classes={classes} setStoredData={setStoredData}/>
        ))}
      </Grid>
      <Grid item sm={12} >
        <Button
            variant="contained"
            color="primary"
            onClick={() => {console.log(calculate(formState.values))}}
            className={classes.button}
            >
                {"Calculate"}
        </Button> 
      </Grid>
    </form>
  );
}
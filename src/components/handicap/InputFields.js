import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useFormState } from 'react-use-form-state';
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

const getHandicapDifferentials = (values) => {
    return Object.keys(values)
    .filter( value => value.startsWith(Constants.GROSS) && values[value] !== "")
    .map( key => {
        let gross   = values[key] 
        let css     = values[key.replace(Constants.GROSS, Constants.CSS)] || Constants.DEFAULT_CSS
        let slope   = values[Constants.SLOPE] || Constants.DEFAULT_SLOPE
        let sss     = values[Constants.SSS]
        return (Constants.SLOPE_DIVISOR / slope) * (gross - sss - css)
    })
}

const average = (values) => {
    if(values.length){
        return values.reduce((a, b) => a + b) / values.length
    }
    return 0
}

const calculate = (values) => {
    let hds = getHandicapDifferentials(values)
    let numRounds = hds.length
    hds.sort((a, b) => a - b)

    if(numRounds >= 3){
        if(numRounds === 3){
            return hds[0] - 2
        }else if(numRounds == 4){
            return hds[0] - 1
        }else if(numRounds == 5){
            return hds[0]
        }else if(numRounds == 6){
            return average([hds[0], hds[1]]) - 1
        }else if(numRounds <= 8){
            return average([hds[0], hds[1]])
        }else if(numRounds <= 11){
            return average([hds[0], hds[1], hds[2]])
        }else if(numRounds <= 14){
            return average([hds[0], hds[1], hds[2], hds[3]])
        }else if(numRounds <= 16){
            return average([hds[0], hds[1], hds[2], hds[3], hds[4]])
        }else if(numRounds <= 18){
            return average([hds[0], hds[1], hds[2], hds[3], hds[4], hds[5]])
        }else if(numRounds === 19){
            return average([hds[0], hds[1], hds[2], hds[3], hds[4], hds[5], hds[6]])
        }else{
            return average([hds[0], hds[1], hds[2], hds[3], hds[4], hds[5], hds[6], hds[7]])
        }
    }else{
        return 0
    }
}

const validateField = (value) => {
    if(isNaN(value)){
        return "Not a number"
    }
    return true
}

const ScoreFields = ({roundNumber, formState, inputs, classes}) => {
    
    return (
        <Grid item sm={12} >
            <ErrorHandleTextField
                formState={formState}
                text={inputs.text}
                name={Constants.GROSS + roundNumber}
                label={`Round ${roundNumber} Gross`}
                fullWidth={false}
                required={false}
                validate={validateField}
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
                validate={validateField}
                className={classes.textField}
                variant="outlined"
            />
        </Grid>
    )
    }

const getInitialState = () => {

    var newState = {}

    var numRounds = Constants.NUM_ROUNDS;
    for(var i=1; i <= numRounds; i++){
        newState[Constants.GROSS + i] = ""
        newState[Constants.CSS + i]   = ""
    }

    return newState
  }

export default function InputFields() {
    
  const classes = useStyles();

  const [formState, inputs] = useFormState(getInitialState());

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
                validate={validateField}
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
                validate={validateField}
                className={classes.textField}
                variant="outlined"
            />  
      </Grid>
      <Grid item sm={12} >
        <Divider style={{marginTop : '10px'}} component={'div'} variant={"middle"}/> 
      </Grid>
        {Object.keys(formState.values).filter( value => value.startsWith(Constants.GROSS)).map( (key, index) => (
            <ScoreFields roundNumber={index + 1} formState={formState} inputs={inputs} classes={classes}/>
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
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ErrorHandleTextField} from '../widgets/forms/CustomFormInputs'
import Constants from '../../constants'
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    maxWidth: "210px",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const ScoreFields = ({roundNumber, formState, inputs, classes, validateField, onclickInfoButton, InfoButton}) => {
    
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
                margin={"dense"}
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
                endAdornment={<InfoButton type={Constants.CSS}/>}
                margin={"dense"}
            />
        </Grid>
    )
}



export default function HandicapForm({formState, inputs, validateField, onClickCalculate, onclickInfoButton}) {

  const classes = useStyles();

  const InfoButton = ({type}) => {
    return(
      <InputAdornment position="end">
        <IconButton
          style={{color: '#B2B2B2'}}
          aria-label="show field info"
          onClick={() => onclickInfoButton(type)}
        >
          <InfoOutlinedIcon />
        </IconButton>
      </InputAdornment>
    )
  }


  return (
    <React.Fragment>
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
                  margin={"dense"}
                  endAdornment={<InfoButton type={Constants.SSS}/>}
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
                  margin={"dense"}
                  endAdornment={<InfoButton type={Constants.SLOPE}/>}
              />  
        </Grid>
        <Grid item sm={12} >
          {/* <Divider style={{marginTop : '10px'}} component={'div'} variant={"middle"}/>  */}
        </Grid>
          {Object.keys(formState.values).filter( value => value.startsWith(Constants.GROSS)).map( (key, index) => (
              <ScoreFields 
                roundNumber={index + 1} 
                formState={formState} 
                inputs={inputs} 
                classes={classes} 
                validateField={validateField}
                onclickInfoButton={onclickInfoButton}
                InfoButton={InfoButton}
                />
          ))}
        </Grid>
        <Grid item sm={12} >
          <Button
              variant="contained"
              color="primary"
              onClick={(event) => {onClickCalculate(event, formState.values)}}
              className={classes.button}
              >
                  {"Calculate"}
          </Button> 
        </Grid>
      </form>
    </React.Fragment>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {ErrorHandleTextField} from '../widgets/forms/CustomFormInputs'
import Constants from '../../constants'
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import ErrorWithStack from 'jest-util/build/ErrorWithStack';

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
  texFieldContainer:{
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  errorText:{
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      color: theme.palette.error.main
  }
}));

const ScoreFields = ({roundNumber, formState, inputs, classes, validateField, onclickInfoButton, InfoButton}) => {
    
    return (
        <Grid className={classes.texFieldContainer} item sm={12} >
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


export default function HandicapForm({formState, inputs, validateField, onClickCalculate, onclickInfoButton, errors}) {

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
        {errors.length > 0 ? 
        <Grid style={{width: '100%'}} className={classes.texFieldContainer} item sm={12} >
          <Box className={classes.errorText}>
            {errors.map( error => 
              <Typography>{error}</Typography> 
            )}
          </Box>
        </Grid> : null}
        <Grid className={classes.texFieldContainer} item sm={12} >
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
        <Grid style={{width: '100%'}} className={classes.texFieldContainer} item sm={12} >
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
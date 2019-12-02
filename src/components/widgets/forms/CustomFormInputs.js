import React from 'react';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';


const ErrorHandleFormControl = (props) =>{

    let {formState, name, label, fullWidth, required} = props
  
    var error = formState.validity[name] !== undefined && !formState.validity[name]
    var errorMessage = formState.errors[name]
  
    return(
      <FormControl 
          fullWidth={fullWidth}
          required={required}
          error={error}
        >
          <InputLabel htmlFor={name}>{label}</InputLabel>
          {props.children}
          <FormHelperText hidden={!error}>{errorMessage}</FormHelperText>
        </FormControl>
    )
  }
  
  export const ErrorHandleTextField = (props) => {
  
    let {formState, text, name, label, validate, className, fullWidth, required, variant, endAdornment, margin } = props

    let error = formState.validity[name] !== undefined && !formState.validity[name]

    return(
          <TextField
            InputProps={{ 
                ...text({
                name : name,
                validateOnBlur: true,
                validate: validate
              }),
              id: name, 
              name :name,
              endAdornment: endAdornment}}
            className={className}  
            fullWidth={fullWidth}
            required={required}
            error={error}
            label={label}
            margin={margin}
            variant={variant}
            helperText={formState.errors[name]}
            FormHelperTextProps={{
              hidden: !error 
            }}
          />
    )
  }
  
 export const ErrorHandleSelectField = (props) => {
  
    let {formState, raw, name, label, options} = props
  
    return(
      <ErrorHandleFormControl
        formState={formState}
        name={name}
        label={label}
      >
        <Select
          { ...raw({
            name : name,
            onChange : option => option.target.value
          })}
          inputProps={{
            name: name,
            id: name,
          }}
        >
          {options.map((option, index) => (
            <MenuItem key={option + index} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </ErrorHandleFormControl>
    )
  }


  export const IconInput = (props) =>{

    let {Icon} = props
  
    return(
      <Grid container spacing={1} alignItems="flex-end">
        <Grid item>
          <Icon />
        </Grid>
        <Grid item>
         {props.children}
        </Grid>
      </Grid>
    )
  
  }
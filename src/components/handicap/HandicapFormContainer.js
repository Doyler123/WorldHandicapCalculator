import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Constants from '../../constants'
import * as util from '../../util/handicapUtil';
import createPersistedState from 'use-persisted-state';
import { useFormState } from 'react-use-form-state';
import HandicapForm from './HandicapForm'
import Definitions from '../definitions/definitions'
import InfoDialog from './InfoDialog'



const useStoredDataState = createPersistedState(Constants.SESSION_STORAGE_KEY, global.sessionStorage);

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

export default function HandicapInfo(props) {
  
  const [ storedData, setStoredData ] = useStoredDataState({})

  const [formState, inputs] = useFormState(getInitialState(storedData));

  const [open, setOpen] = useState(false);

  const [dialogInfo, setDialogInfo] = useState({
    title: "",
    info: ""
  })
  
  const onclickInfoButton = (type) => {
    switch(type){
      case Constants.SSS:
        setDialogInfo({ title: "CR or SSS", info: Definitions[Constants.SSS]})
        break;
      case Constants.SLOPE:
        setDialogInfo({ title: "Slope", info: Definitions[Constants.SLOPE]})
        break;
      case Constants.CSS:
        setDialogInfo({ title: "CSS", info: Definitions[Constants.CSS]})
        break;
        
    }
    setOpen(true)
  }

  const onClickCalculate = (values) => {
    if(validateForm()){
      return util.calculateHandicap(values)
    }

    return 0
  }

const validateForm = () => {

  let calculate = true

  Object.keys(formState.values).forEach(key => {
    let fieldValue = formState.values[key]

    if(key === Constants.SSS){
      if(!fieldValue){
        formState.setFieldError(key, "*Required")
        calculate = false
      }
    }

    if(key === Constants.SLOPE){
      if(fieldValue){
        if(isNaN(fieldValue)){
          formState.setFieldError(key, "Not a number")
          calculate = false
        }else if(fieldValue < 55 || fieldValue > 155){
          formState.setFieldError(key, "Must be between 55 - 155")
          calculate = false
        }
      }
    }

    if(key.startsWith(Constants.GROSS)){
      if(isNaN(fieldValue)){
        formState.setFieldError(key, "Not a number")
        calculate = false
      }
    }

    if(key.startsWith(Constants.CSS)){

      let sss = formState.values[Constants.SSS]
      if(fieldValue){
        if(isNaN(fieldValue)){
          formState.setFieldError(key, "Not a number")
          calculate = false
        }else if(sss && (fieldValue < sss - 1 || fieldValue > sss + 3) ){
          formState.setFieldError(key, "SSS -1/+3")
          calculate = false
        }
      }
    }

  })

  return calculate
}

const validateField = (value) => {
    if(isNaN(value)){
        return "Not a number"
    }

    setStoredData({...formState.values})

    return true
}

  return (
        <Grid item xs={12} lg={6}>
          <InfoDialog open={open} setOpen={setOpen} dialogInfo={dialogInfo}/>
          <HandicapForm 
            formState={formState}
            inputs={inputs}
            validateField={validateField}
            onClickCalculate={onClickCalculate}
            onclickInfoButton={onclickInfoButton}
          />
        </Grid>
  );
}
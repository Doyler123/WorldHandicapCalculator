import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Constants from '../../constants'
import * as util from '../../util/handicapUtil';
import { useFormState } from 'react-use-form-state';
import HandicapForm from './HandicapForm'
import Definitions from '../../constants/definitions'
import InfoDialog from './InfoDialog'

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

const scrollToTop = event => {
  const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

  if (anchor) {
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};

export default function HandicapInfo({ whsHandicap, setWHSHandicap, storedData, setStoredData }) {
  
  const [formState, inputs] = useFormState(getInitialState(storedData));

  const [dialogOpen, setDialogOpen] = useState(false);

  const [dialogInfo, setDialogInfo] = useState({
    title: "",
    info: "",
    type : ""
  })
  
const openDialog = (type) => {
  switch(type){
    case Constants.SSS:
      setDialogInfo({ title: "CR or SSS", info: Definitions[Constants.SSS], type: type})
      break;
    case Constants.SLOPE:
      setDialogInfo({ title: "Slope", info: Definitions[Constants.SLOPE], type: type})
      break;
    case Constants.CSS:
      setDialogInfo({ title: "CSS", info: Definitions[Constants.CSS], type: type})
      break;
    case Constants.RESULT:
      setDialogInfo({title: "WHS Handicap", info: whsHandicap, type: type})
      break;
      
  }
  setDialogOpen(true)
}

const onClickCalculate = (event, values) => {
  if(validateForm()){
    setWHSHandicap(util.round(util.calculateHandicap(values), 1))
    if(whsHandicap){
      scrollToTop(event)
      openDialog(Constants.RESULT)
      setStoredData({...storedData, whsHandicap: whsHandicap})
    }
  }else{
    scrollToTop(event)
  }
}

useEffect(()=>{
  if(whsHandicap && storedData.whsHandicap !== whsHandicap){
    openDialog(Constants.RESULT)
    setStoredData({...storedData, whsHandicap: whsHandicap})
  }
}, [whsHandicap])

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

    setStoredData({...storedData, ...formState.values})

    return true
}

  return (
        <Grid item xs={12} lg={6}>
          <div id="back-to-top-anchor"></div>
          <InfoDialog open={dialogOpen} setOpen={setDialogOpen} dialogInfo={dialogInfo}/>
          <HandicapForm 
            formState={formState}
            inputs={inputs}
            validateField={validateField}
            onClickCalculate={onClickCalculate}
            onclickInfoButton={openDialog}
          />
        </Grid>
  );
}
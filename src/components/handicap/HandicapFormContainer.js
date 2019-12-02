import React from 'react';
import Grid from '@material-ui/core/Grid';
import Constants from '../../constants'
import * as util from '../../util/handicapUtil';
import createPersistedState from 'use-persisted-state';
import { useFormState } from 'react-use-form-state';
import HandicapForm from './HandicapForm'
import Typography from '@material-ui/core/Typography';


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

  const onClickCalculate = (values) => {
    return util.calculateHandicap(values)
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
          <HandicapForm 
            formState={formState}
            inputs={inputs}
            validateField={validateField}
            onClickCalculate={onClickCalculate}
          />
        </Grid>
  );
}
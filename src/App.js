import React, { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout'
import HandicapForm from './components/handicap/HandicapFormContainer'
import WHSDefinitions from './components/definitions/WHSDefinitions'
import createPersistedState from 'use-persisted-state';
import Constants from './constants'

const useStoredDataState = localStorage.getItem(Constants.SESSION_STORAGE_KEY) ? 
  createPersistedState(Constants.SESSION_STORAGE_KEY, global.sessionStorage):
  createPersistedState(Constants.SESSION_STORAGE_KEY, global.localStorage)

function App() {

  const [ storedData, setStoredData ] = useStoredDataState({})

  const [whsHandicap, setWHSHandicap] = useState(storedData.whsHandicap)

  return (
    <div style={{backgroundColor: '#f5f5f5'}} className="App">
      <Layout whsHandicap={whsHandicap} >
        <HandicapForm 
          whsHandicap={whsHandicap} 
          setWHSHandicap={setWHSHandicap}
          storedData={storedData}
          setStoredData={setStoredData}/>
        <WHSDefinitions />
      </Layout>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import Layout from './components/layout/Layout'
import HandicapForm from './components/handicap/HandicapFormContainer'
import WHSDefinitions from './components/definitions/WHSDefinitions'
import createPersistedState from 'use-persisted-state';
import Constants from './constants'

const useStoredDataState = createPersistedState(Constants.SESSION_STORAGE_KEY, global.sessionStorage)

function App() {

  const [ storedData, setStoredData ] = useStoredDataState({})

  const [ whsHandicap, setWHSHandicap ] = useState(storedData.whsHandicap)

  return (
    <div className="App">
      <Layout whsHandicap={whsHandicap} >
        <WHSDefinitions />
        <HandicapForm 
          whsHandicap={whsHandicap} 
          setWHSHandicap={setWHSHandicap}
          storedData={storedData}
          setStoredData={setStoredData}/>
      </Layout>
    </div>
  );
}

export default App;

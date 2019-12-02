import React from 'react';
import './App.css';
import Layout from './components/layout/Layout'
import HandicapForm from './components/handicap/HandicapFormContainer'
import WHSDefinitions from './components/definitions/WHSDefinitions'


function App() {
  return (
    <div style={{backgroundColor: '#f5f5f5'}} className="App">
      <Layout>
        <HandicapForm />
        <WHSDefinitions />
      </Layout>
    </div>
  );
}

export default App;

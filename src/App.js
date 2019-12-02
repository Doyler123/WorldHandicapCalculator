import React from 'react';
import './App.css';
import Layout from './components/layout/Layout'
import HandicapForm from './components/handicap/HandicapFormContainer'


function App() {
  return (
    <div className="App">
      <Layout>
        <HandicapForm />
      </Layout>
    </div>
  );
}

export default App;

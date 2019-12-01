import React from 'react';
import './App.css';
import Layout from './components/layout/Layout'
import HandicapInfo from './components/handicap/HandicapInfo'


function App() {
  return (
    <div className="App">
      <Layout>
        <HandicapInfo />
      </Layout>
    </div>
  );
}

export default App;

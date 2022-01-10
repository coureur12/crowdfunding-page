import './App.css';
import About from './components/About.js';
import HeaderProject from './components/HeaderProject';
import Record from './components/Record';
import Layout from './components/Layout';
import React from 'react';

function App() {



  return (
    <div className="abt-project">
      <Layout>
        <HeaderProject />
      <Record money="$89,914" backer="5,007"  day="56" />
      <About />
      </Layout>
    </div>
    
  );
}

export default App;

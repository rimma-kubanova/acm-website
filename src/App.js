import React from 'react';

import { Header, WhoWeAre, Events, Community, SIG, Quotes, FAQs, Footer } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
        <Navbar />
        <Header />
        <WhoWeAre />
        <Community />
        <SIG />
        <Quotes />
        <FAQs />
        <Footer />
    </div>
  )
}

export default App
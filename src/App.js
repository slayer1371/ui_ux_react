import React from 'react'
import {Navbar, Brand, CTA} from './components';
import {Footer, Blog, Possibility, Feature, WhatGPT3, Header} from './containers';
import './App.css'

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Feature />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App;
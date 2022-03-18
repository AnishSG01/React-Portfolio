import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'

const App = () => {
  return (
    <div className='container'>
    <Header/>
    <About/>
    <Contact/>
    </div>
  )
}

export default App


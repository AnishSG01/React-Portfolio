import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <div className='container'>
    <Header/>
    <Nav/>
    <About/>
    <Contact/>
    </div>
  )
}

export default App


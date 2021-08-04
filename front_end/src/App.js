import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Components/Header/Header'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'

import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
    return (
            <BrowserRouter>
            <Header />
            <main>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            </main>
            <Contact/>
            <Footer/>
            </BrowserRouter>
    )
}

export default App
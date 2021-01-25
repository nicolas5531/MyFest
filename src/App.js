import React, { Component } from 'react'
import { Footer } from './component/Footer'
import { Header } from './component/Header'
import Main from './component/Main'
// importo a toda la aplicacion
import "./styles.css"   

export default class App extends Component {
  render() {
    return (
      <>
      {/* si toda mi app va a tener header lo dejo aca */}
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

// es un componente una caracteristica de los comp. funcionales es que el import va entre {} el de clase solo el nombre
import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Menu } from './component/Menu'
import { Footer } from './component/Footer'
import { Header } from './component/Header'
// importo a toda la aplicacion
import "./styles.css" 
import { Historia } from './component/Historia'
import { HistoriaAntigua } from './component/HistoriaAntigua'
import Main from './component/Main'

export default class App extends Component {
  render() {
    return (
      <>
      {/* si toda mi app va a tener header lo dejo aca */}
      {/* Header y footer si los quiero en la vista siempre no van a entrar en el modulo de router.
      Todos los componentes donde yo quiera tener Links, deben estar dentro del router  */}
        
        <BrowserRouter>
        {/* En header puedo aplicar el NavLink */}
        <Header />
        {/*Switch hace que React se quede con la primer ruta que le coincida o primer incidencia. aca se queda con historia
        cuando sea /historia/antigua  */}
          <Switch>
          {/* Cuanto la ruta sea exactamente como dice el path va a menu solo suele usarse cuando es / */}
            <Route exact path="/" component={Menu} />
            <Route exact path="/historia" component={Historia} />
  {/*       Si tuviera tambn esta ruta sin el switch, el path de /historia deberia ser exact sino se me cargarian los 2 componentes*/}    
            <Route path="/historia/antigua" component={HistoriaAntigua} />
            <Route path="/principal" component={Main} />
            {/* Funciona como default dentro de switch */}
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
        <Footer />
      </>
    )
  }
}

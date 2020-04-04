import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import App from './App.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {App} title = "Home" initial = {true} />
      </Scene>
   </Router>
)
export default Routes
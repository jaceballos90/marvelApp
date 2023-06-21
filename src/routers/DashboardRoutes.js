import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navbar } from '../ui/Navbar'
import { ComicScreen } from '../comics/ComicScreen'
import { Characters } from '../characters/Characters'
import { MainScreen } from '../main/MainScreen'
import BarraNavegacion from '../ui/BarraNavegacion'



export const DashboardRoutes = () => {
  return (
    <>
    <BarraNavegacion />
   
    <Switch>
        <Route exact path='/comics' component={ComicScreen} />
        <Route exact path='/characters' component={Characters} />
        <Route exact path='/' component={MainScreen} />
    </Switch>

    </>
  )
}

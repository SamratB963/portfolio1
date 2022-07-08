import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'


const Routing = () => {
    return (
        <div>
          
            <Switch>
                <Route exact path = "/" component = {Home}/>
                <Route exact path = "/about" component = {About}/>
            </Switch>
        </div>
    )
}

export default Routing

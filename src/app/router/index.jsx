import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import comp from '../screen/comp'
import valMealBf from '../screen/value-meal-bf'
import valMealRod from '../screen/value-meal-rod'
import happyMealRod from '../screen/happy-meal-rod'
import happyMealBf from '../screen/happy-meal-bf'

const _router = () =>
    <Router history={hashHistory}>
        <Route path='/' component={comp}></Route>
        <Route path='val-bf' component={valMealBf}></Route>
        <Route path='val-rod' component={valMealRod}></Route>
        <Route path='happy-rod' component={happyMealRod}></Route>
        <Route path='happy-bf' component={happyMealBf}></Route>
    </Router>

export default _router
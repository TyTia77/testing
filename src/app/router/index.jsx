import React from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import comp from '../screen/comp'
import valMealBf from '../screen/value-meal-bf'
import valMealRod from '../screen/value-meal-rod'
import happyMealRod from '../screen/happy-meal-rod'
import happyMealBf from '../screen/happy-meal-bf'

const router = () =>
    <Router history={hashHistory}>
        <Route path='/' component={comp} />
        <Route path='val-bf' component={valMealBf} />
        <Route path='val-rod' component={valMealRod} />
        <Route path='happy-rod' component={happyMealRod} />
        <Route path='happy-bf' component={happyMealBf} />
    </Router>

export default router

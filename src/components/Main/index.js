import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Series from '../../containers/Series';
import SingleSeries from '../../containers/SingleSeries'

const Main = prop => (
    <Switch>
        <Route exact path="/" component={Series}></Route>
        <Route exact path="/single/:id" component={SingleSeries}></Route>
    </Switch>
)

export default Main;
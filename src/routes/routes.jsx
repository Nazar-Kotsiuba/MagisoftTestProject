import React from 'react'
import {Switch, Route} from "react-router-dom";
import {RoutersConfig} from './routeConfig'

import {User} from '../page/user/User'
import {Users} from '../page/users/Users'
import {NotFoundPage} from '../page/notFoundPage/NotFound'

export const Routes = () => {
    return (
            <Switch>
                <Route exact path={RoutersConfig.usersList} component={Users}/>
                <Route path={RoutersConfig.user} component={User}/>
                <Route component={NotFoundPage} />
            </Switch>
    )
}
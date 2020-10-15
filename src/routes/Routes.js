import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading'

const Home = lazy(() => import('../pages/HomePage'));
const TemperaturePage = lazy(() => import('../pages/TemperaturePage'));
const TemperatureHistoryPage = lazy(() => import('../pages/TemperatureHistoryPage'));
const AlarmPage = lazy(() => import('../pages/AlarmPage'));

const Routes = () => {
    return (
        <Switch>
            <Suspense fallback={<Loading open={true} />}>
                <Route exact path='/' component={Home} />
                <Route exact path='/temperatura-atual' component={TemperaturePage} />
                <Route exact path='/historico-temperaturas' component={TemperatureHistoryPage} />
                <Route exact path='/alarmes' component={AlarmPage} />
            </Suspense>
        </Switch>
    )
}

export default Routes;
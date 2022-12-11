import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

// Organization
const LocationList = lazy(() => import('./organization/LocationList'));
const LocationMaster = lazy(() => import('./organization/LocationMaster'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));


const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));



const Mdi = lazy(() => import('./icons/Mdi'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const BlankPage = lazy(() => import('./general-pages/BlankPage'));

const Home = lazy(() => import('./user-pages/Home'));




class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route path="/dashboard" component={ Dashboard } />

          {/* Organization */}
          <Route path="/organization/location-list" component={ LocationList } />
          <Route path="/organization/location-master" component={ LocationMaster } />


          <Route path="/basic-ui/buttons" component={ Buttons } />
          <Route path="/basic-ui/dropdowns" component={ Dropdowns } />
          <Route path="/basic-ui/typography" component={ Typography } />


          <Route path="/form-Elements/basic-elements" component={ BasicElements } />

          <Route path="/tables/basic-table" component={ BasicTable } />


          <Route path="/icons/mdi" component={ Mdi } />


          <Route path="/charts/chart-js" component={ ChartJs } />


          <Route exact path="/user-pages/login" component={ Login } />
          <Route path="/user-pages/register" component={ Register1 } />
          <Route path="/user-pages/lockscreen" component={ Lockscreen } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />

          <Route path="/general-pages/blank-page" component={ BlankPage } />

          <Route exact path="/" component={ Home } />


          <Redirect to="/user-pages/login" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
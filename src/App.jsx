import { useState,Suspense, lazy } from 'react'
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'

import Loading from './pages/Loading/Loading'
import Error from './pages/Error/Error'
import {  BrowserRouter as Router,Route,Routes, Navigate } from 'react-router-dom'
import { sv_url } from './routes/Server'
import { PublicRoutes } from './routes/public/Public'

const Login = lazy(()=>import('./pages/Login/Login'))
const RoutesWithNotFound = lazy(()=>import('./pages/NotFound/NotFound'))
function App() {

  return (
   
     <ErrorBoundary FallbackComponent={Error}>
      <Suspense fallback={<Loading/>}>
      <Router>
        <RoutesWithNotFound>
          <Route index path={`${sv_url.DEV}${PublicRoutes.LOGIN}`} element={<Login/>}/>
        </RoutesWithNotFound>
      </Router>
      {/* <Router>
        <RoutesWithNotFound>
      <Route index path={`${sv_url.DEV}${PublicRoutes.LOGIN}`} element={<Login/>}/>
      </RoutesWithNotFound>
        </Router> */}
      </Suspense>
    </ErrorBoundary>
  )
}

export default App

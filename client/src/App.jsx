import React from 'react'
import { Button } from "@/components/ui/button"
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import { RouteIndex, RouteSignIn, RouteSignUp } from './helpers/RouteName'
import Index from './pages/Index'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Routes>
      <Route path={RouteIndex} element={<Layout />} >
       <Route index element={<Index />} />
      </Route>
       <Route path={RouteSignIn} element={<SignIn />} />
       <Route path={RouteSignUp} element={<SignUp />} />
    </Routes>
  )
}

export default App

import React from 'react'
import { Button } from "@/components/ui/button"
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import { RouteIndex } from './helpers/RouteName'
import Index from './pages/Index'

const App = () => {
  return (
    <Routes>
      <Route path={RouteIndex} element={<Layout />} >
       <Route index element={<Index />} />
      </Route>
    </Routes>
  )
}

export default App

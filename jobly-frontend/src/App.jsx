import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";

import RouteManager from './route-manager/RouteManager';
import Navbar from "./navbar/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <RouteManager/>
    </BrowserRouter>
  )
}

export default App

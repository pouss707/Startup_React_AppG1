import './App.css'
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';


function App() {
  return (
    <>
      <Outlet />
      <Formcomponent />

    </>
  );
}


export default App

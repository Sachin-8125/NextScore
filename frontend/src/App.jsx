import React,{ useState } from 'react'
import axios from 'axios'
import './App.css'
import Signup from './components/Signup';

const API_BASE_URL = import.meta.env.API_BASE_URL;


function App() {

  return (
    <Signup/>
  )
}

export default App

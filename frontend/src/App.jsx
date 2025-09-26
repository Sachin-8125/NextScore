import React,{ useState } from 'react'
import axios from 'axios'
import './App.css'
import Signup from './components/Signup';
import Login from './components/Login';
import CreditScore from './components/CreditScore';
import AddDataForms from './components/AddDataForms';


const API_BASE_URL = import.meta.env.API_BASE_URL;


function App() {

  return (
    <AddDataForms/>
  )
}

export default App

// import { useState } from 'react'
import './App.css'
import NewWineForm from './features/NewWineForm';
import WineList from './features/WineList';


function App() {

  return (
    <>
      <h1>Wine Logger</h1>
      <div id='mainContent'>
        <NewWineForm/>  
        <WineList/>
      </div>

    </>
  )
}

export default App

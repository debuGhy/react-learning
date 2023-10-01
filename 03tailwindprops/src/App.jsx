import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <h1 className='text-3xl font-bold underline bg-green-400'>Vite with tailwind</h1>
      <Card username="prop one"/>
      <Card username="prop two" />
      <Card post="Staff Engineer"/>
    </>
  )
}

export default App

import React, { useState } from 'react'
import Banner from './Banner'

function Home() {

  const [query, setQuery] = useState("");
  const handleInputChange = (event)=>{
    setQuery(event.target.value)
  }
  console.log(query)

  return (
    <Banner query={query} handleInputChange={handleInputChange}/>
  )
}

export default Home
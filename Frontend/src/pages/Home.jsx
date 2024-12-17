import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'

function Home() {

  const [selectedCategory,setSelectedCategory] = useState(null);
  const[jobs,setJobs] = useState([]);

  useEffect(()=>{
    fetch("jobs.json").then(res => res.json()).then(data =>{
      setJobs(data)
    })
  },[])
  
   // Handle input change

  const [query, setQuery] = useState("");
  const handleInputChange = (event)=>{
    setQuery(event.target.value)
  }
  
  // Filtering by job title

  const filteredItems = jobs.filter((job)=> job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1);

  return (
    <Banner query={query} handleInputChange={handleInputChange}/>
  )
}

export default Home
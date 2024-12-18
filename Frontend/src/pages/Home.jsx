import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';

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

  //----------- Radio filtering ------------//

  const handleChange = (event)=>{
    setSelectedCategory(event.target.value)
  }

  //------ Button based filtering-----------//

  const handleClick = (event)=>{
    setSelectedCategory(event.target.value)
  }

  //main function---------//

  const filteredData = (jobs,selected,query)=>{
    let filterdedJobs = jobs;

    if(query){
      filterdedJobs=filteredItems;
    }

    // Category filtering
    if(selected){
      filterdedJobs = filterdedJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=>(
        jobLocation.toLowerCase()=== selected.toLowerCase() ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase()=== selected.toLowerCase()||
        employmentType.toLowerCase() === selected.toLowerCase() 
      ));
      console.log(filterdedJobs);
    }

    return filterdedJobs.map((data, i)=> 
        <Card key={i} data={data}/>
    )
  }

  const result = filteredData(jobs, selectedCategory,query);



  return (
    <div>
    <Banner query={query} handleInputChange={handleInputChange}/>

    <div className='bg-[#FAFAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12'>

      {/* Job Filtering side */}
    <div className='bg-white p-4 rounded'>

      <Sidebar handleChange={handleChange} handleClick={handleClick}/>

    </div>

    {/* JOb Side */}
    <div className='col-span-2 bg-white p-4 rounded-sm'><Jobs result={result}/></div>

    {/* Email side */}
    <div className='bg-white p-4 rounded'>Right</div>

    </div>
    </div>
  )
}

export default Home
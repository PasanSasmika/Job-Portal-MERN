import React, { useEffect, useState } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card';
import Jobs from './Jobs';
import Sidebar from '../sidebar/Sidebar';

function Home() {

  const [selectedCategory,setSelectedCategory] = useState(null);
  const[jobs,setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage,setCurrentPage] = useState(1);
  const itemsPerPage  = 6;

  useEffect(()=>{
    fetch("jobs.json").then(res => res.json()).then(data =>{
      setJobs(data);
      setIsLoading(false)
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

  // calculate the index range

  const calculatePageRange =()=>{
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return {startIndex, endIndex};
  }

  // function for the next page

  const nextPage =()=>{
    if(currentPage < Math.ceil(filteredItems.length / itemsPerPage)){
      setCurrentPage(currentPage + 1);

    }
  }

  // function for the previous page

  const previous =()=>{
   if(currentPage > 1){
    setCurrentPage(currentPage - 1)
   }
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
        postingDate>= selected ||
        parseInt(maxPrice) <= parseInt(selected) ||
        salaryType.toLowerCase()=== selected.toLowerCase()||
        employmentType.toLowerCase() === selected.toLowerCase() 
      ));
      console.log(filterdedJobs);
    }

      // slice the data based on current page
      const {startIndex, endIndex} = calculatePageRange();
      filterdedJobs = filterdedJobs.slice(startIndex, endIndex) 
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
    <div className='col-span-2 bg-white p-4 rounded-sm'>
      {
        isLoading ? (<p>Loading....</p>) : result.length > 0 ? ( <Jobs result={result}/>) : <>
        
        <h3 className='text-lg font-bold'>{result.length} Jobs</h3>
        <p>No Job found !</p>
        </>

      }

      {/* Pagination is here */}
        {
          result.length > 0 ? (
            <div className='flex justify-center mt-4 space-x-8'>
              <button onClick={previous}>Previous</button>
              <span>page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
              <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)}>Next</button>
            </div>
          ) : ""
        }


  </div>
    {/* Email side */}
    <div className='bg-white p-4 rounded'>Right</div>

    </div>
    </div>
  )
}

export default Home
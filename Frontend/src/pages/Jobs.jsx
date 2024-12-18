import React from 'react'

function Jobs({result}) {
  return (
    <>
    <div>
    <h3 className='text-lg font-bold'>{result.length} Jobs</h3>

    </div>

    <section >{result}</section>
    </>
  )
}

export default Jobs
import React from 'react';

/** Renders information about a single job
 *
 * Props:
 * - jobs: Array of objects of job data
 *    [{id: Integer,
 *    title: String,
 *    salary: Integer,
 *    equity: Numeric,
 *    companyHandle: String}...]
 *
 * State:
 * - None
 *
 * JobList -> JobCardList -> JobCard
 */

function JobsCardList( { jobs }){
  console.log("JobsCardsList is reached with:", jobs);

  return (
    <div> JobsCardList reached</div>
  )
}

export default JobsCardList;

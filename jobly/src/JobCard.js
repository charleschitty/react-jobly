import React from 'react';

/** Renders information about a single job
 *
 * Props:
 * - job: Object with job data
 *    {id: Integer,
 *    title: String,
 *    salary: Integer,
 *    equity: Numeric,
 *    companyHandle: String}
 *
 * State:
 * - None
 *
 * JobsCardList -> JobCard
 */
function JobCard({ job }){
  console.log("JobCard is rendered with:", job);

  return (
    <div> JobCard is reached </div>
  );

}

export default JobCard;
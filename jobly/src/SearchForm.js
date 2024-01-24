import { React, useState } from "react";

/** Generic Search Form
 *
 * Props:
 *  - search(): function received from parent that updates parent's state of
 *  job/company
 *
 * State:
 *  - searchTerm: the form data retrieved from a user's search
 *
 * { JobList, CompanyList } -> SearchForm
*/

function SearchForm({ search }){
  console.log("SearchForm reached")

  const [searchTerm, setSearchTerm] = useState("");

  console.log("SearchForm's searchTerm is currently:", searchTerm);

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm);
    setSearchTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={searchTerm} onChange={handleChange} />
      <button>Search!</button>
    </form>
  );
}

export default SearchForm;
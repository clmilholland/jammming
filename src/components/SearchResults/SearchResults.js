import React from 'react';
import './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';


const SearchResults = (props) => {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
      </div>
    );
  };
  
  export default SearchResults;
  

import PropTypes from 'prop-types';
import React from 'react';
import {Link} from "react-router-dom";
export const Header = (props) => {
  return (
    <div>
        <nav  className="navbar navbar-expand-lg navbar-light bg-light">
<div  className="container-fluid">
 {props.title}

<div  className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
    <li  className="nav-item">
      <Link  className="nav-link active" aria-current="page" to="https://ravinderkumar72857.github.io/todos-list/">Home</Link>
    </li>
    <li  className="nav-item">
      <Link  className="nav-link" to="https://ravinderkumar72857.github.io/todos-list/about">About</Link>
    </li>
   
  </ul>
 {props.searchBar? <form  className="d-flex">
    <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    <button  className="btn btn-outline-success" type="submit">Search</button>
  </form>:""}
</div>
</div>
</nav>
    </div>
);
}


Header.defaultProps = {
    title: "Title here",
    searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
}
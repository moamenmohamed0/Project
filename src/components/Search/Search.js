import React from 'react';
import axios from 'axios'
import { useEffect, useState } from "react";

const Search = ({task,deleteTask,onToggle}) =>  {
  const [Data,setData] = useState([])
  const [Status,setStatus] = useState("rent")
  const [Type,setType] = useState('Office')
  const [Location,setLocation] = useState('Cairo')
  const config = {
        headers:{
            'Access-Control-Allow-Origin': '*',
        }
    };
  const statusChange = (event) => {
    setStatus(event.target.value);
    console.log(Status);
  }
  const locationChange = (event) => {
    setLocation(event.target.value);
  }
  const typeChange = (event) => {
    setType(event.target.value);
  }
  const HandleClick = (e) => {
    e.preventDefault();
    console.log(Status);
    
    console.log("cd");
    axios.get(`http://localhost:5000/properties/search?type=${Type}&status=${Status}&location=${Location}`,config).then(
        (res) => {
            console.log(res)
            setData(res.data.properties);
        }
        )
        .catch(err => {
            console.log(err);
        // some error handling
        });
    console.log(Data)
  }
  return (
   <div>
<div className="box">
    <div className="search-box">
      <div className="Search-select">
          <div className="sec">
              <div className="label">
                <label for="Property_Status">Property Status</label>
                  </div>
                      <div className="select">
                          <select name="property-Status" onChange={statusChange} id="Property-status">
                              <option value="rent">For Rent</option>
                              <option value="sale">For Sale</option>
                              <option value="any">Any</option>
                          </select>
                        </div>
            </div>
        </div>
          <div className="Search-select">
              <div className="sec">
                <div className="label">
                  <label for="location">Location</label>
                    </div>
                          <div className="select">
                              <select name="location" onChange={locationChange} id="location">
                                  <option value="Cairo">Cairo</option>
                                  <option value="Giza">Giza</option>
                                  <option value="Alex">Alex</option>
                                  <option value="Luxor">Luxor</option>
                                  <option value="London">London</option>
                              </select>
                            </div>
              </div>
        </div>

        <div className="Search-select">
            <div className="sec">
                <div className="label">
                  <label for="Property-Type">Property Type</label>
                    </div>
                          <div className="select">
                              <select onChange={typeChange} name="Property-Type" id="Property-Type">
                                  <option value="Office">Office</option>
                                  <option value="Shop">Shop</option>
                                  <option value="Apartment">Apartment</option>
                                  <option value="property">property</option>
                                  
                              </select>
                          </div>
            </div>
        </div>
        <div className="btn1">
          <button type="button" onClick={HandleClick} id="search-button">Search</button>
        </div>
    </div>
</div>    
<div className="container">
  {Data.map(object => 
    <div className="box">
    <div className="top">
      <img src="imgs/blog-1.png" alt="" />
      <span id={object._id}>
      </span>
    </div>
    <div className="bottom">
      <h3>{object.name}</h3>
      <p>
        {object.description}
      </p>
      <div className="advants">
        <div>
          <span>Bedrooms</span>
          <div><i className="fas fa-th-large"></i><span>{object.rooms}</span></div>
        </div>
        <div>
          <span>Bathrooms</span>
          <div><i className="fas fa-shower"></i><span>{object.baths}</span></div>
        </div>
        <div>
          <span>Area</span>
          <div>
            <i className="fas fa-vector-square"></i
            ><span>{object.size}<span>M <sup>2</sup></span></span>
          </div>
        </div>
      </div>
      <div className="price">
        <span>For Sale</span>
        <span>{object.price}</span>
        <button className="heart-button">
          <i className="fas fa-heart"></i>
      </button>
      </div>
    </div>
  </div>
    )}
  </div>
</div>
  );
}
export default Search;
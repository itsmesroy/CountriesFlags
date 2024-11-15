import React, { useState, useEffect } from "react";
import Card from "./Card";
// import axios from "axios";

function Countries() {
  const URL = "https://restcountries.com/v3.1/all";

  const [countries, setCountries] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  // const [countryData, setCountryData] = useState("");
  // const [filterCountryData, setFilterCountryData] = useState("");

    useEffect(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => setCountries(data))
        .catch((error) => console.error("Error fetching data: ", error));
    }, []);
    console.log(countries);

    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

  // const fetchCountryData = async () => {
  //   let url = "https://restcountries.com/v3.1/all";
  //   try {
  //     let response = await axios.get(url);
  //     setCountryData(response.data);
  //     setFilterCountryData(response.data);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCountryData();
  // }, []);

  // const searchCountries = async () => {
  //   if (searchTerm === "") {
  //     setFilterCountryData(countryData);
  //   }

  //   let url = "https://restcountries.com/v3.1/all";

  //   try {
  //     let response = await axios.get(url);

  //     const filteredData = response.data.filter((country) =>
  //       country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  //     );

  //     setFilterCountryData(filteredData);
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
  // };
  // useEffect(() => {
  //   searchCountries();
  // }, [searchTerm]);

  // const handleChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <input
        className="searchInput"
        placeholder="Search flag"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          margin: "20px 0",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid gray",
          width: "300px",
          textAlign: "center",
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
        {filteredCountries && filteredCountries.map((country) => (
          <Card
            data={country}

          />
        ))}
      </div>
    </div>

    // <div>
    //   <div className="searchSection">
    //     <form>
    //       <input
    //         type="text"
    //         placeholder="Search for countries..."
    //         value={searchTerm}
    //         onChange={(e) => handleChange(e)}
    //       />
    //     </form>
    //   </div>
    //   <div className="App">
    //     {filterCountryData &&
    //       filterCountryData.map((ele) => <Card data={ele} />)}
    //   </div>
    // </div>
  );
}

export default Countries;

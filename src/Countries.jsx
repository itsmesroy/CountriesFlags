import React, { useState, useEffect } from "react";
import Card from "./Card"


function Countries() {
  const URL = "https://restcountries.com/v3.1/all";
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data))      
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  console.log(countries);

  const filteredCountries = countries.filter((country) =>
    country.name?.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
  );
}

export default Countries;

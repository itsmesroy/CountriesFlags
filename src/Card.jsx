
import React from 'react'

const Card = ({ data}) => {
    return (
      <div
       className="countryCard"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          width: "200px",
          borderRadius: "5px",
          border: "1px solid gray",
          padding: "10px",
        }}
      >
        <img    
          src={data.flags.svg}
          alt={data.name}
          style={{
            width: "100px",
            height: "50px",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        />
        <h2>{data.name.common}</h2>
  
      </div>
    );
  };

  export default Card;
import React from 'react'
import pkg from "../data"

const Packages = () => {
  return (
    <div>
    <center> <h1>Packages</h1></center>
     
      <ul>
        {pkg.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.setup}</p>
            <p>{item.reference}</p>
            <p>{item.origin}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Packages
import React from 'react'
const pkg=[{
  id:1,
  name:"Volley",
  setup:`implementation("com.android.volley:volley:1.1.1")`,
  reference:"https://www.geeksforgeeks.org/making-api-calls-using-volley-library-in-android/",
  origin:"https://google.github.io/volley/"
}]
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
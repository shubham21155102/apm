
import React from 'react'
import { useRouter } from 'next/router'
const Index = () => {
    const router = useRouter()
    const [ids,setId]=React.useState(null)
    console.log(router)
    const {query} = router
    console.log(query)
    const {id} = query
    console.log(id)
    const item = pkg.find((item) => item.id === parseInt(id))
    console.log(item)
  return (
    <div>
    

      {/* <h1>{item.name}</h1>
      <p>{item.setup}</p>
      <p>{item.reference}</p>
      <p>{item.origin}</p> */}
    </div>

  )
}

export default Index
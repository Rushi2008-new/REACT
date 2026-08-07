import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rushi2008-new')
    //     .then(res => res.json())
    //     .then(data => {
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git picture' width={300}/>
    </div>
  )
}

export default Github
export const githubInfoLoader = async () => {
   const res = await fetch('https://api.github.com/users/Rushi2008-new')
   if (!res.ok) {
     throw new Response('Failed to load GitHub data', { status: res.status })
   }
   return res.json()
}

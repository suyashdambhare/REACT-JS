import React, { useEffect, useState } from 'react'


 
    

function Github() {
  
  const [data ,setdata] = useState([])
  useEffect(()=>{
    fetch("https://api.github.com/users/suyashdambhare")
    .then(response =>response.json())
    .then(data =>{
      
      setdata(data)
    })
   
  },[])
   
  return (
    <div>
     <div class="text-white mx-auto max-w-xl rounded-md bg-black p-1">
      Github Followers : {data.followers}
      <img className='rounded-full' src={data.avatar_url} alt="Git Picture" width={200} />
  
</div>

    </div>
  )
}

export default Github

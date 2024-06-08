import React  from 'react'

function Card({name}) {
  return (
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
    <div className="h-full w-full md:h-[200px] md:w-[300px]">
      <img
        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
        alt="Laptop"
        className="h-full w-full rounded-md object-cover"
      />
    </div>
    <div>
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {name}
       
         
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          debitis?
        </p>
        <div className="mt-4">
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Macbook
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Apple
          </span>
          <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
            #Laptop
          </span>
        </div>

      </div>
    </div>
  </div>
  
  )
}

export default Card

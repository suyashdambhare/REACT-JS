import React from 'react'
import Card from './Card'

function Navbar() {
  return (
    < >
    <div class="bg-blue-100">
    <div class="relative w-full isolate aspect-video  rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
   
      <span class="font-bold">Navbar</span>
    </div>
    <div class="hidden lg:block">
      <ul class="ml-12 inline-flex space-x-8">
        <li>
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Home
           
          </a>
        </li>
        <li>
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            About
           
          </a>
        </li>
        <li>
          <a
            href="#"
            class="inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900"
          >
            Contact
          
          </a>
        </li>
      </ul>
    </div>
    <div class="flex grow justify-end">
      <input
        class="flex h-10 w-[250px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Search"
      />
    </div>
    
  </div>
  <div class="p-16">
  <Card name=" About MacBook Air"/ >
  <br />
  <Card name="MacBook M1"/>
  
  </div>
</div>

</div>

</>
  )
}

export default Navbar

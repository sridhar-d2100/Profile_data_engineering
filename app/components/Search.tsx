
import React from "react"

export default function Serach(){
    return <> 
  <form className="max-w-lg mx-auto">
  <div className="relative flex items-center">
    <input
      type="search"
      id="search-dropdown"
      className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-l-lg border-2 border-r-0 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      placeholder="Search Mockups, Logos, Design Templates..."
      required
    />
    <button
      type="submit"
      className="p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border-2 border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
      </svg>
      <span className="sr-only">Search</span>
    </button>
  </div>
</form>



    </>

}
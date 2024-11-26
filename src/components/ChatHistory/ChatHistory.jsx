import React from 'react'

function ChatHistory() {
  return (
    <div id="chathist">
      <ul className="w-[12%] hidden fixed overflow-hidden z-1 h-screen top-[6%] left-0 rounded-ee bg-secondary flex-col uppercase font-extrabold text-lite text-sm md:flex">
        <li className='mt-5 ml-3'>
          Today
          {/* <ul className={`w-[12%] hidden transition-all duration-500 fixed overflow-hidden z-1 h-screen top-[6%] left-0 rounded-ee bg-secondary flex-col text-center uppercase font-extrabold items-center text-lite text-xl md:flex`}> 
              <li className="flex w-[90%] justify-center mt-5 py-3 rounded-lg hover:bg-[#06292b]  transition-all">
              <a href="#" class="" aria-current="page">New Chat</a>
              </li>
              <li className="flex w-[90%] justify-center mt-5 py-3 rounded-lg hover:bg-[#06292b] transition-all">
              <a href="#" class="">Law Logs</a>
              </li>
              <li className="flex w-[90%] justify-center mt-5 py-3 rounded-lg hover:bg-[#06292b] transition-all">
              <a href="#" class="">Lawyer Finder</a>
              </li>
              <li className="flex w-[90%] justify-center mt-5 py-3 rounded-lg hover:bg-[#06292b] transition-all">
              <a href="#" class="">Virtual Court</a>
              </li>
              <li className="flex w-[90%] justify-center py-3 rounded-lg mt-[40rem] hover:bg-[#06292b]  transition-all">
              <a href="#" class="">Sign Up</a>
              </li>
          </ul> */}
        </li>
        
      </ul>
        
    </div>
  )
}

export default ChatHistory
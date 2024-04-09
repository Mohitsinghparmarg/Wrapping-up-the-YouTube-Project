import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
         <img
         className="h-10"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/128/666/666201.png"
          />
        <span className='font-bold px-2'>{name}:</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage
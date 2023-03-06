import React from 'react'
import {BsChatSquareDotsFill} from 'react-icons/bs'

const ChatButton = () => {
  return (
    <div className='chat-button'>
    <button className="btn btn-chat"><BsChatSquareDotsFill className='mx-1' /> Chat</button>
    </div>
  )
}

export default ChatButton
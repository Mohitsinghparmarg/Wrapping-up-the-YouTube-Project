import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import {useDispatch} from "react-redux";
import { addMessage } from '../utils/ChatSlice';
import {useSelector} from "react-redux";
import { generateRandomName, makeRandomMessage } from '../utils/helper';


const LiveChat = () => {

    const [liveMessage,setLiveMessage] = useState("");
     
    const dispatch = useDispatch();

    const ChatMessages = useSelector((store) => store.chat.messages);

   useEffect(() => {
           const i = setInterval(() => {
          // console.log("API is Polling");

          dispatch (

           addMessage({
             name:generateRandomName(),
             message:makeRandomMessage(20) + "mohit",
           })
          );
      },2000);
       
      return () => clearInterval(i);

   },[]);




  return (
  <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
          {
            ChatMessages.map((c,i) =>
             <ChatMessage
               key={i}
               name= {c.name}
               message={c.message}
            />)
          }
      </div>
    </div>

     <form className='w-full p-2 ml-2 border border-black'
       onSubmit={(e) => {
          e.preventDefault();
        //   console.log("the message has been sent",liveMessage);
          dispatch(
              addMessage({
                  name:"mohit",
                  message:liveMessage,
              })
          );
          setLiveMessage("");
       }}
     >
        <input className='px-2 w-95' type='text' 
        value={liveMessage} 
          onChange={(e) => {
            setLiveMessage(e.target.value);
        }}/>
        <button className='px-4 mx-4 bg-green-100'>Send</button>
     </form>
  </>
  )
}

export default LiveChat
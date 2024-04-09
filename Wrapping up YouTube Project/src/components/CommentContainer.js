

import React from 'react'

const commentsdata = [
      
     {
        name:"mohit",
        Text:"how are you rahul",
        replies:[
            {
                name:"rahul",
                Text:"all good bhai ",
                replies:[],
             },
        ],
     },
     {
        name:"rahul",
        Text:"how are you rohan",
        replies:[
            {
                name:"rohan",
                Text:"it's ohk",
                replies:[
                    {
                        name:"sharman",
                        Text:"are you ohk",
                        replies:[],
                     },
                ],
             },
        ],
     },
     {
        name:"rohit",
        Text:"how are you mohit",
        replies:[
            {
                name:"mohit",
                Text:"hey ! what happend darling",
                replies:[],
             },
        ],
     },
     {
        name:"raman",
        Text:"hare ram",
        replies:[
            {
                name:"pawan",
                Text:"how are you raman",
                replies:[
                    {
                        name:"pradhuman",
                        Text:"namaskaram everyone",
                        replies:[],
                     },
                ],
             },
        ],
     },
];

 const Comment = ({data}) => {
      const {name,Text} = data;
     return (
          <div className='flex shadow-sm bg-gray-100 p-2 rounded-sm my-2'>
             <img 
               className='w-12 h-12'
               alt='user'
               src='https://cdn-icons-png.flaticon.com/128/666/666201.png'
             />
             <div className='px-3'>
               <p className='font-bold'>{name}</p>
               <p>{Text}</p>
             </div>
          </div>
     );
 };

  const CommentList = ({comments}) => {
        
      return comments.map((comment,index) =>(
           <div key={index}>
                <Comment  data={comment}/>
             <div className='pl-5 border border-l-black ml-5'>
                 <CommentList comments={comment.replies} />
             </div>
             </div>
    ));
  };


const CommentContainer = () => {
  return (
    <div className='m-5 p-2'>
       <h1 className='text-2xl font-bold'>Comments:</h1>
       <CommentList comments={commentsdata}/>
    </div>
  );
};

export default CommentContainer;
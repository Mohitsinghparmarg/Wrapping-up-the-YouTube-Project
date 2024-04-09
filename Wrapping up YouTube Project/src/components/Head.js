import React, { useEffect ,useState} from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constant';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

   const [searchQuery,setSearchQuery] = useState("");
   const [suggestions,setsuggestions] = useState([]);
   const [showSuggestions,setShowSuggestions] = useState(false);
   
   const searchCache = useSelector((store) => store.search);
   const dispatch = useDispatch();


   /***
    *   searchCache = {
    *          "iphone": ["iphone 11","iphone 14"]
    *      }
    *    
    * searchQuery = iphone
    * 
    * 
    */
   

   useEffect(()=> {

     // make an API call after every key press
     // but if the difference between 2 API calls is <200ms
     // decline the API call
     const timer =  setTimeout(() => {
     
      if(searchCache[searchQuery]) {
          setsuggestions(searchCache[searchQuery]);
      }
      else
        {
           getSearchSuggestions()
        }
         //  getSearchSuggestions()
      },200);

     return () => {
         clearTimeout(timer);
     };
   },[searchQuery]);

   /****
    *  key - i
    *   - render the Component
    *   - useEffect();
    *   - start timer => make API call after 200 ms
    * 
    *  key - ip
    *   - destroy the Component(useEffect return method)
    *   - re-render the Component
    *   - useEffect()
    *   - start timer => make API call after 200 ms
    *  
    * setTimeout(200) - make API call after 200 ms
    * 
    * 
    * 
    *
    */







  const getSearchSuggestions = async () => {
           console.log(searchQuery);
           const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
           const json = await data.json();
           setsuggestions(json[1]);

        // Update cache

        dispatch(cacheResults(
            {
               [searchQuery]:json[1],
              
            }
        ));
  };

   const toggleMenuHandler = () => {
       dispatch(toggleMenu());
   };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img 
          onClick={() => toggleMenuHandler()}
           className="h-8 cursor-pointer"
           alt="menu"
           src="https://img.icons8.com/?size=50&id=3096&format=png"
        />
      <a href="/">
        <img 
           className="h-10 mx-2"
           alt="youtube-logo"
           src="https://t3.ftcdn.net/jpg/05/07/46/84/240_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg"
        />
      </a>
      </div>

       <div className="col-span-10 px-10">
         <div>
            <input className="w-1/2 border borde-gray-400 p-2 rounded-l-full"
             type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />
           <button className=" border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
             🔎︎
           </button>
         </div>
         { showSuggestions && (
           <div className='fixed bg-white py-2 px-5 w-[28rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>

           {suggestions.map((s) =>(
              <li
                key={s} className='py-2 shadow-sm hover:bg-gray-100'> 
                🔎︎ {s}
              </li>
             ))}
          </ul>
       </div>
         )}
      </div>
       <div className='col-span-1'>
         <img
         className="h-20"
          alt="user-icon"
          src="https://cdn-icons-png.flaticon.com/128/666/666201.png"
          />
        </div>

    </div>
  )
}

export default Head;
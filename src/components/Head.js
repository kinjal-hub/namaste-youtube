import { useDispatch, useSelector } from "react-redux";
import { APP_LOGO, MENU_ICON, USER_ICON, YOUTUBE_SEARCH_API } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
    const [seachQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    
    const searchCache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    
    useEffect(() => {
    const timer = setTimeout(() =>{
        if(searchCache[seachQuery])
        {
            setSuggestions(searchCache[seachQuery]);
        }
        else{
        getSerchSuggestion() 
        }
        } ,200);
    
    
        return () => 
       clearTimeout(timer);
    }, [seachQuery]);

    const getSerchSuggestion = async () => {
        console.log("Api Call - " + seachQuery);
        const data = await fetch(YOUTUBE_SEARCH_API+seachQuery);
        const json = await data.json();
        // console.log(json[1]);
        setSuggestions(json[1]);

        // update Cache
        dispatch(cacheResults({
            [seachQuery] : json[1]
        }))
    }
    
    

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

   return(
      <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className="flex">
            <img 
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer"
            alt="menu" src={MENU_ICON}/>
            <a href="/">
            <img className="h-8 mx-2"
            alt="app-logo" src={APP_LOGO}/>
            </a>
        </div>
        <div className="col-span-8 px-10 justify-center">
            <div>
            <input
            className="px-5 w-1/2 border  border-gray-700 rounded-l-full p-2"
            type="text"
            value={seachQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            />
            <button className="border border-gray-700 rounded-r-full p-2 bg-gray-100">
                🔍
            </button>
            </div>
            {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
        
        <div className="col-span-1">
            <img className="h-8"
            alt="user-icon" src={USER_ICON} />
        </div>
      </div>
   )
}

export default Head;
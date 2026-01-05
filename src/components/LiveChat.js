import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");

    const chatMessages = useSelector((store) => store.chat.messages);    
   
    useEffect(() => {
     const i = setInterval(() => {
    //  API POLLING
     
      dispatch(addMessage(
        {
            name: generateRandomName(),
            message: makeRandomMessage(20) + " 🚀",
        }
      ))
     }, 2000);
     return () => clearInterval(i); 
    
   },[]);

    return(
        <>
        <div className="w-full h-[600px] ml-2 p-3 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            <div>
            {chatMessages.map((c,i) => (<ChatMessage
            name={c.name}
            message={c.message}/>
            ))
            }
            </div>
        </div>
        <form className="w-full p-2 ml-2 border border-black" onSubmit={(e) => {
            e.preventDefault();
            console.log("On form submit", liveMessage);
            dispatch(addMessage({
                name: "Ankit Patel",
                message: liveMessage,
            })
        );
         setLiveMessage("");
        }}>
                <input className="px-2 w-70" type="text"
                value={liveMessage}
                onChange={(e) => {
                    setLiveMessage(e.target.value);
                }}
                />
                <button className="px-2 mx-2 bg-green-100 rounded-lg">Send</button>
        </form>
        </>
    )
}

export default LiveChat;
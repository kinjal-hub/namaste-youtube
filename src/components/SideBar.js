import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
   const isMenuOpen = useSelector(store => store.app.isMenuOpen);

   if(!isMenuOpen) return null;  // early  return

   return(
       <div className="p-5 shadow-lg col-span-2 w-40">
         <ul>
            <li><Link to="/">🏛 Home</Link> </li>
            <li> Sorts </li>
            
         </ul>
         <h1 className="font-bold">Subscription</h1>
         <ul>
            <li> Music </li>
            <li> Sports </li>
            <li> Gaming </li>
            <li> Movies </li>
         </ul>
         <h1 className="font-bold pt-5">Watch Latern</h1>
         <ul>
            <li> Music </li>
            <li> Sports </li>
            <li> Gaming </li>
            <li> Movies </li>
         </ul>
      </div>
   )
}

export default SideBar;
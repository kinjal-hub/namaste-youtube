import Button from "./Button";


const ButtonList = () => {
   const List = ["All", "Cricket", "Gaming", "Comedy", "Soccer", "Live", "Cooking", "Songs", "News"];

   return(
      <div className="flex">
         {List.map((item, index) => (
            <Button key={index} name={item} />
         ))}
         {/* <Button name="All" />
         <Button name="Cricket"/>
         <Button name="Gaming"/>
         <Button name="Comedy"/>
         <Button name="Soccer"/>
         <Button name="Live"/>
         <Button name="Cooking"/> */}
      </div>
   )
}

export default ButtonList;
import type { APIResponse } from "./types";

type filterButtonProps = {
    buttonTitles : APIResponse["data"],
    setCategory : React.Dispatch<React.SetStateAction<"All" | keyof APIResponse["data"]>>,
}

const FilterButtons:React.FC<filterButtonProps> = ({buttonTitles,setCategory}) => {

  const categoryKeys: ("All" | keyof APIResponse["data"])[] = [
    "All",
    ...(Object.keys(buttonTitles) as (keyof APIResponse["data"])[])
  ];
  return (
    <div className="flex items-center justify-around ">
      {
        categoryKeys.map((category,index)=>(
            <button
            onClick={()=>setCategory(category)}
            key={index}>{category}</button>
        ))
      }
    </div>
  )
}

export default FilterButtons

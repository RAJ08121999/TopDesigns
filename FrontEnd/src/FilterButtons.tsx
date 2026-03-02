import type { APIResponse } from "./types";

type filterButtonProps = {
    buttonTitles : APIResponse["data"],
    setCategory : React.Dispatch<React.SetStateAction<string>>,
}

const FilterButtons:React.FC<filterButtonProps> = ({buttonTitles,setCategory}) => {

    const categoryKeys = ["All",...Object.keys(buttonTitles)];
  return (
    <div>
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

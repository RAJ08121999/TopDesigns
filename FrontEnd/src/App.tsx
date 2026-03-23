import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import FilterButtons from "./FilterButtons";
import DesignList from "./DesignList";
import type { APIResponse } from "./types";

const App = () => {
  const [design , setDesign ] =useState<APIResponse | null >(null)
  const [category,setCategory] = useState<"All" | keyof APIResponse["data"]>("All");

  const baseUrl = "https://topdesigns.onrender.com/api/designdata";

  async function fetchData() {
    try{
      const response = await axios.get(baseUrl);
      setDesign(response.data);
      console.log(response.data);
    }catch(error){
      console.log("error in fetching data",error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div >
      <Navbar/>
      {
        design && (
          <FilterButtons 
            buttonTitles={design.data} 
            setCategory={setCategory} 
          />
        )
      }
      {
        design && (
          <DesignList category = {category} design = {design}/>
        )
      }
      
    </div>
  )
}

export default App

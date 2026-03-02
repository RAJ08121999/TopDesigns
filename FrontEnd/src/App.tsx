import axios from "axios";
import { useEffect, useState } from "react"
import Navbar from "./Navbar";
import FilterButtons from "./FilterButtons";
import DesignList from "./DesignList";
import type { APIResponse } from "./types";

const App = () => {
  const [design , setDesign ] =useState<APIResponse| null >(null)
  const [category,setCategory] = useState<string>("All");

  const baseUrl = "https://topdesigns.onrender.com/api/designdata";

  async function fetchData() {
    try{
      const response = await axios.get(baseUrl);
      setDesign(response.data);
      console.log(response.data);
    }catch(error){
      console.log(error);
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
          <>
            <FilterButtons setCategory = {setCategory} buttonTitles ={design?.data}/>
            <DesignList data = {design?.data}/>
          </>
        )
      }
    </div>
  )
}

export default App

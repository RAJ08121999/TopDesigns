import Card from "./Card"
import type { APIResponse, OneItem} from "./types"

type DesignListProp = {
  design:APIResponse,
  category:"All" | keyof APIResponse["data"];
}

const DesignList:React.FC<DesignListProp> = ({design,category}) => {
  let filteredData:OneItem[]=[];
  if(category === "All"){
    filteredData = Object.values(design.data).flat();
  }
  else{
    filteredData = design.data[category];
  }
  return (
    <div>
      {filteredData.map((item)=>(
        <Card key={item.id} title ={item.title} description = {item.description} price = {item.price} image1 = {item.image1.url} image2 = {item.image2.url} />
      ))}
    </div>
  )
}

export default DesignList

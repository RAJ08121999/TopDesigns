type CardProp = {
    title:string,
    description:string,
    price:number,
    image1:string,
    image2:string,
}

const Card: React.FC<CardProp>= ({title,description,price,image1,image2}) => {
  return (
    <div>
      {title}
      <img src={image1} width={300}/>
      <div>{description}</div>
      <h4>{price}</h4>
    </div>
  )
}

export default Card

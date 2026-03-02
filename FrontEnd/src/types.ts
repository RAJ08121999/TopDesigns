export type OneItem ={
    id:string,
    title:string,
    description:string,
    price:number,
    image1:{
        url:string,
        alt:string,
    },
    image2:{
        url:string,
        alt:string,
    },
};

export type APIResponse = {
    data:{
        MenClothing:OneItem[],
        WomenClothing:OneItem[],
        WeddingClothing:OneItem[],
        CelebrityCloset:OneItem[],
    }
};
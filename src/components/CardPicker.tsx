import { useState, useEffect } from "react";
// import { useSprings, animated, to as interpolate } from '@react-spring/web'
// import { useDrag } from '@use-gesture/react'
export default function DisplayCard(){


    interface Card{
        Name: string,
        Img: string,
        Price: string,
    }

// 
//  Set up for animation
//     







// 
const [data, setData] = useState<Card | null>(null);

const oldData = JSON.parse(localStorage.getItem("Cards") || "[]")

const[cards, setCards] = useState<Card[]>(oldData);


// const[deck, setDeck] = useState<any[]>([]);



const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
const api_url =  "https://api.scryfall.com/cards/random?q=is%3Acommander";





 const fetchData = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setLoading(false);
        setData({
          Name: data["name"],
          Img: data["image_uris"].png,
          Price: data["prices"].usd
        });
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  };

  
  useEffect(() => {
    fetchData();
  }, []);

// useEffect(() =>{

// // if (loading && !data){
// if (!data){


//     fetch(api_url)
//     .then (response => response.json())
//     .then((data) => {
        
//         console.log(data);
//         setLoading(false)
//         setData({
//             Name:data["name"], 
//             Img:data["image_uris"] ? data["image_uris"].png : data["image_uris"].normal , 
//             Price:data["prices"].usd
//         });
//         // setDeck(prevDeck => [...prevDeck, data["image_uris"].png])
//     })
//     .catch((e) => {
//         console.error(`An error occurred: ${e}`)
//     });
// // }
// }
// }, [data]);




const handleClick = () => {
   
   if (data && !loading){
    // const newCard = data

    const isDuplicate = cards.some(card => card.Name === data.Name)

if (!isDuplicate) {
    
    setCards([...cards, data])
    localStorage.setItem("Cards", JSON.stringify([...cards, data]));
    const oldData = JSON.parse(localStorage.getItem("Cards") || "[]")
    console.log("Number of cards:" + oldData.length);
// }else{
    // handleClickNo()
}
fetchData();
setLoading(true)
    }
    } 


const handleClickNo = () => {
    fetchData()
    setLoading(true)
}


return(
    <div>
        <h1>Commander Roulette</h1>
<figure>
        {loading ? <img className="display__image" src="https://i.imgur.com/LdOBU1I.jpg"></img>   : <img id="card-image" className="display__image" src={data?.Img} alt=""></img> }
        <figcaption className="display__caption">{data?.Name} {data?.Price === null ? "Price: Unknown" : 'Price: $' + data?.Price }</figcaption>
    </figure>
    <div className="display__controls">
    
    <button onClick={handleClickNo}>No </button>
    <button onClick={handleClick} disabled={loading}>Yes</button>
    </div>

    </div>

)


}


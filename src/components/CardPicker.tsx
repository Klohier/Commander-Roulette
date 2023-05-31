import { useState, useEffect } from "react";
import { useSprings, animated, to as interpolate } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
export default function DisplayCard(){


// 
//  Set up for animation
//     







// 
const [data, setData] = useState({
    Name: '',
    Img: '',
    Price: '',

});

const oldData = JSON.parse(localStorage.getItem("Cards") || "[]")

const[cards, setCards] = useState<any[]>(oldData);


const[deck, setDeck] = useState<any[]>([]);



const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
const api_url =  "https://api.scryfall.com/cards/random?q=is%3Acommander";

useEffect(() =>{

    fetch(api_url)
    .then (response => response.json())
    .then((data) => {
        
        // console.log(data);
        setLoading(false)
        setData({Name:data["name"], Img:data["image_uris"].png, Price:data["prices"].usd} );
        setDeck(prevDeck => [...prevDeck, data["image_uris"].png])
    })
    .catch((e) => {
        console.error(`An error occurred: ${e}`)
    });
}, [cards]);




const handleClick = () => {
    
    setCards([...cards, data])
    localStorage.setItem("Cards", JSON.stringify([...cards, data]));
    const oldData = JSON.parse(localStorage.getItem("Cards") || "[]")
    console.log("Number of cards:" + oldData.length);

    } 


const handleClickNo = () => {
    setCards([...cards])
}


return(
    <div>
        <h1>Commander Roulette</h1>
<figure>
        {loading ? <h1>Loading</h1>   : <img id="card-image" className="display__image" src={data.Img} alt=""></img> }
        <figcaption className="display__caption">{data.Name} {data.Price === null ? "Price: Unknown" : 'Price: $' + data.Price }</figcaption>
    </figure>
    <div className="display__controls">
    
    <button onClick={handleClickNo}>No </button>
    <button onClick={handleClick}>Yes</button>
    </div>

    </div>

)


}


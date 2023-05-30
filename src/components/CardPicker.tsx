import { useState, useEffect } from "react";
export default function DisplayCard(){

    

const [data, setData] = useState({
    Name: '',
    Img: '',
    Price: '',

});

const oldData = JSON.parse(localStorage.getItem("Cards") || "[]")

const[cards, setCards] = useState<any[]>(oldData);






// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);
const api_url =  "https://api.scryfall.com/cards/random?q=is%3Acommander";

useEffect(() =>{


    
    fetch(api_url)
    .then (response => response.json())
    .then((data) => {
        
        // console.log(data);
        // setLoading(false)
        setData({Name:data["name"], Img:data["image_uris"].png, Price:data["prices"].usd} );
    })
    .catch((e) => {
        console.error(`An error occurred: ${e}`)
    });
}, [cards]);




const handleClick = () => {
    
    // const oldData = JSON.parse(localStorage.getItem("Cards") || "[]")
    // setCards([...cards, oldData])
    setCards([...cards, data])
    // console.log(oldData);

    localStorage.setItem("Cards", JSON.stringify([...cards, data]));
    
    const oldData = JSON.parse(localStorage.getItem("Cards") || "[]")
    console.log("Number of cards:" + oldData.length);
    // console.log(oldData);
    // fetch(api_url)
    //     .then (response => response.json())
    //     .then((data) => {
            
    //         // console.log(data);
    //         setLoading(false)
    //         setData({Name:data["name"], Img:data["image_uris"].png, Price:data["prices"].usd});
            
    //     })
    //     .catch((e) => {
    //         console.error(`An error occurred: ${e}`)
    //     });
    } 


const handleClickNo = () => {

    setCards([...cards])
    // fetch(api_url)
    //     .then (response => response.json())
    //     .then((data) => {
            
    //         // console.log(data);
    //         setLoading(false)
    //         setData({Name:data["name"], Img:data["image_uris"].png, Price:data["prices"].usd} );
            
    //     })
    //     .catch((e) => {
    //         console.error(`An error occurred: ${e}`)
    //     });

}


return(
    <div>
        <h1>Commander Roulette</h1>
<figure>
        <img id="card-image" className="display__image" src={data.Img} alt=""></img>
        <figcaption className="display__caption">{data.Name} {data.Price}</figcaption>
    </figure>
    <div className="display__controls">
    
    <button onClick={handleClickNo}>No </button>
    <button onClick={handleClick}>Yes</button>
    </div>

    </div>

)


}


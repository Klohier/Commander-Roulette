import { useEffect, useState } from "react";



export default function Chosen(){

const[cards, setCards] = useState<any[]>(JSON.parse(localStorage.getItem("Cards") || "[]"));

// Loads Previous Data from local storage
    useEffect(() =>{

    const oldData = JSON.parse(localStorage.getItem("Cards") || "[]");
    
    if (oldData){
    setCards(oldData);
    }

    }, []);

    // Updates Local Storage whenever cards gets changed

    useEffect(() => {
        const json = JSON.stringify(cards);
        localStorage.setItem("Cards", json);
      }, [cards]);



const deleteCard = (name: any) => {

setCards((cards) => 
            cards.filter((card) => name !== card.Name  )        

             )

    };

 const listItems = cards.map((card: any) =>
            <li key={card.Name}>
                <p onClick={() => console.log(card.Name)}>{card.Name}</p>
                <button className="deleteButton" onClick={() => deleteCard(card.Name)}>Delete</button>
            </li>
            
            );

    return(  
        <>
        <h1>Chosen</h1>        
        <div className="cardback">
        {listItems.length === 0 ? <p>No cards have been added!</p> : <ul className="chosenDisplay">{listItems}</ul>}
        </div>

        <div className="selectedCard"></div> 
        </>
    )


}
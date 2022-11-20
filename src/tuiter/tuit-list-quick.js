import {useEffect, useState} from "react";

const TuitListQuick = () =>{
    const [tuits, setTuits] = useState([]);
    const getAllTuitsFromServer = async () =>{
        const response = await fetch('http://localhost:4000/tuits');
        const data = await response.json();
        setTuits(data);
    }
    useEffect(() =>{
        getAllTuitsFromServer();
    },[]);
    return(
        <>
         <h3>tuit list quick and dirty</h3>
            <ul>
                {tuits.map(tuit =>
                  <li key={tuit.id}>{tuit.tuit}</li>
                )}
            </ul>
        </>
    );
}
export default TuitListQuick;
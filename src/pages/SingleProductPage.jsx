import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SingleProduct() {
    const {id} = useParams()

    useEffect(() => {
        fetch({id})
        .then(res => res.json())
        .then(data => {
            console.log(data)
        }
            
        )
    }, [])
    
    return(
    
         <h1>Prodotto {id}</h1>
    )
}

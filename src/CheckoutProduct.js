import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider"

function CheckoutProduct({ id, status, name, miles, store, storeDistance, transferFee, price, image }) {
    const [{ basket }, dispatch] = useStateValue();

    console.log(id, status, name, miles, store, storeDistance, transferFee, price, image);

    const removeFromFavorites = () => {
        dispatch({
            type: "REMOVE_FROM_FAVORITES",
            id: id,
        });
    }
    
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>

            <div className="checkoutProduct__info">
            <p className="checkoutProduct__status">{status}</p>
                <p className="checkoutProduct__name">{name}</p>
                <p>{miles} miles</p>
                <p>Located at CarMax {store}, ({storeDistance} mi)</p>
                <p>${transferFee} transfer fee</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromFavorites}>Remove from Favorites</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;

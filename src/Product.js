import React from 'react';
import "./Product.css"; 
import { useStateValue } from "./StateProvider";

function Product({ id, status, name, miles, store, storeDistance, transferFee, price, image }) {
   
    // dispatch is like a gun (shoot/append in/out favorite)
   const [{}, dispatch] = useStateValue();
   
    const addToFavorites = () => {
        dispatch({
            type: "ADD_TO_FAVORITES",
            item: {
                id: id,
                status: status,
                name: name,
                miles: miles,
                store: store,
                storeDistance: storeDistance,
                transferFee: transferFee,
                price: price,
                image: image,
            },
        });
   };
   
    return (
        <div className="product">
            <div className="product__info">
                <p className="product__status">{status}</p>
                <p>{name}</p>
                <p>{miles} miles</p>
                <p>Located at CarMax {store}, ({storeDistance} mi)</p>
                <p>${transferFee} transfer fee</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <img src={image}/>
            <button onClick={addToFavorites}>Add to favorites</button>
        </div>
    );
}

export default Product;
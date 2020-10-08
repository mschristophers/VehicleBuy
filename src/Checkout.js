import React from 'react';
import './Checkout.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
    const [{ favorite }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img
                className="checkout__ad"
                src="https://db-oems.s3.amazonaws.com/honda/overviews/2020/cr-v/2020-CRV-hero.jpg"
            />
            {favorite?.length === 0 ? (
                <div>
                    <h2>Your list is empty.</h2>
                    <p>You have no items in your list. To add them, click on the <b>"add to favorites"</b> button</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your List of Favorite(s)</h2>

                    {/* List of all checkout products */}
                    { favorite?.map((item) => {
                        return (
                        <CheckoutProduct
                            id={item.id}
                            status={item.status}
                            name={item.name}
                            miles={item.miles}
                            store={item.store}
                            storeDistance={item.storeDistance}
                            transferFee={item.transferFee}
                            price={item.price}
                            image={item.image}
                        />
                        );
                    })}
                </div>
            )}
            </div>
            {favorite.length > 0 && (
                <div className="checkout+_right"> 
                    <Subtotal/>
                </div>
            )}
        </div>
    )
}

// react-currency-format
export default Checkout;
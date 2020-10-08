import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getFavoritesTotal } from './reducer';

function Subtotal() {
    const [{ favorite }, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText = {(value) => (
                    <>
                        <p>
                            Subtotal ({favorite.length} items) : <strong>{` ${value} `}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getFavoritesTotal(favorite)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;

import React from "react";

const CartWidget = ()=> {
    return (
        <button type="button" className="btn btn-info position-relative">
          <img src="img/basket2-fill.svg" alt="carrito" width={35}/>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1
        </span>
        </button>
    )

}
export default CartWidget;

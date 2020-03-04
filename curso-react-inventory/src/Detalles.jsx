import React from "react";

export function Detalles(props){
    
    return(
        <div>
        <div>Name: {props.location.product.name}</div>
        <div>Price: {props.location.product.price}</div>
        <div>Category: {props.location.product.category}</div>
        </div>
    );

}
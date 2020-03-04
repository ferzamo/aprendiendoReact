import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <Category content={props.content} category="Alimentación"></Category>
        <Category content={props.content} category="Electrónica"></Category>
      </tbody>
    </table>
  );
}

const Category = props => {
  const products = props.content.filter(el => el.category === props.category);
  return (
    <>
    
      {products.map((el, index) => {
        return (
          
          <tr key={`${props.category}_${index}`}>
            
            <td style={{ color: el.stocked ? 'black' : 'red' }}><Link to={{ pathname: `/${el.name.split(' ').join('_')}`, product: el}}>{el.name}</Link></td>
            <td>{el.price}</td>
            <td>{el.category}</td>
           
          </tr>
          
        );
      })}
      
    </>
  );
};

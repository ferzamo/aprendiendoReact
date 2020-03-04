import React from "react";

export function Home(props){

    return(
        <div className="App-Filter">
        <input
          type="text"
          placeholder="Filtrar..."
          onChange={props.changeFilter}
        />
        <br></br>
        <div>
          <label htmlFor="stock">Sólo mostrar productos en stock</label>
          <input id="stock" type="checkbox" onChange={props.toggleShowStock} />
        </div>
      </div>


    );

}
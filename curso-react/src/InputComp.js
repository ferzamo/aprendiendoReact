import React from 'react';


class InputComp extends React.Component {


   

    render() {
        return (
           <input value={this.props.val} onChange={(e) => this.props.onCambio(e.target.value)}/>
        );

    }


}

export default InputComp;
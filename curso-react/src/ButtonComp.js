import React from 'react';


function ButtonComp(props) {
    return <button onClick={(props.action)}>Click</button>;
}

export default ButtonComp;
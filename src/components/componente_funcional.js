import React, { Component } from "react";

/*componentre funcional*/
function MeuComponenteFuncional(props) {

    const style = {color:'red', fontSize: '16px'};


    return (
        <div>
            
            <h1>Olá DeepSeek!!!</h1>
            
            <p style={style}>{props.inseta}, este é um componente funcional.</p>

            <hr/>
            
        </div>
        
    );
}

export default MeuComponenteFuncional;

 
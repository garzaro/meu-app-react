import React, { Component } from "react";

class MeuComponenteClasse extends Component {

    render() {
        return (
            <div>
                <h1>Olá DeepSeek!!!</h1>
                {this.props.inseto}, este é um componente de classe.
                <br />
            </div>
        );
    }
}

export default MeuComponenteClasse;
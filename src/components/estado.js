import React, {Component} from "react";

class Estado extends Component {

    /*metodo construtor*/
    constructor(props) {
        /**pegar todas as props do componente pai - render(){} */
        super(props);
        /**pegar os estados*/
        this.state = {

            uf: 'Ceará \\o/',
            perninhas: '\/\;\\',
            contador: 0

        };
        /*para que o render possa enchegar a função aumentar()*/
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar() {

        let state = this.state;
        //this.setState({contador: 1});
        state.contador += 1;
        state.nome = 'Zero Berto';
        this.setState(state);
    }

    diminuir() {

        let state = this.state;
        /*parar no zero*/
        if (state.contador === 0){
            return;
        }

        state.contador -= 1;
        this.setState(state);
    }

    render() {
        return (

            <>

                <h5>Podemos alterar o estado, o valor do componente.</h5>

                {this.state.uf}
                <br/>
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;

                {this.state.perninhas}
                <br/><br/>

                <h5>Um contador para elucidar a alteração de estado.</h5>

                {this.state.nome}

                <br/>

                <button onClick={this.diminuir}>-</button>

                &nbsp;{this.state.contador}&nbsp;

                <button onClick={this.aumentar}>+</button>

                <hr />
            </>
            /*para nao esquecer do &nbsp*/

        );
    }
}

export default Estado;
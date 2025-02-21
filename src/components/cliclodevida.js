import React, {Component, Fragment} from 'react';

class Cliclodevida extends Component {

    constructor(props) {
        super(props);
        this.state = {

            hora: 'hora - minuto - segundo',
            dia: 'dia - mes - ano',
        }
    }

    componentDidMount() {
        /*função anonima ()=>*/
       this.timerID = setInterval(()=>{

            this.setState({dia: new Date().toLocaleDateString()});
            this.setState({hora: new Date().toLocaleTimeString()});

        }, 1000);

    }

    showcomponentDidUpdate(){

        console.log("Cliclodevida.Esta atualizando o state.");

    }

    render() {
        return (
            <>

                <div>

                    <h3>Hora certa: {this.state.hora} - {this.state.dia}</h3>

                </div>

            </>

        );
    }

}
export default Cliclodevida;
import React,{Component} from "react";
import 'bootswatch/dist/flatly/bootstrap.css'

class Index extends Component{
    /*usando state pode se alterar o valor sempre que necessario*/
    constructor(props){
        super(props);
        this.state = {

            nome: props.nome

        }
    }

    render(){
        return (
            <div>
                <hr />
                <h2>Sejam bem-vindos (a)</h2>
                <h1>Membros - <br/> {this.state.nome}</h1>


                <button type="button" class="btn btn-info" onClick={this.entrar} >Entrar como membro</button>
                &nbsp;&nbsp;
                <button type="button" class="btn btn-danger" onClick={this.sair} >Sair</button>
            </div>
        );
    }
}
export default Index;
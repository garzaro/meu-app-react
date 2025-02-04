import React from "react";
import Equipe from "../components/equipe";
import MeuComponenteClasse from "../components/componente_classe";
import MeuComponenteFuncional from "../components/componente_funcional";
import BoasVindas from "../components/bemvindo";



import './custom.css'


function MeusComponentes() {

    return (
        <div>
            <BoasVindas />
            <Equipe />
            <hr />

            <h2>Componentes funcional e de classe.</h2>
            <br />

            <MeuComponenteClasse inseto="Gafanhoto" />
            <MeuComponenteFuncional inseta="Gafanhota" />

        </div>
    );

}
export default MeusComponentes;


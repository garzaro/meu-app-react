import React from "react";
import Equipe from "./equipe";
import MeuComponenteClasse from "./componente_classe";
import MeuComponenteFuncional from "./componente_funcional";
import BoasVindas from "./bemvindo";
import Estado from "./estado";
import Cliclodevida from "./cliclodevida";


import '../custom.css'
/*dentro da pasta Membros tem o arquivo index.js.*/
import Membros from "./Membros";




function MeusComponentes() {

    return (
        <div>
            <BoasVindas />
            <Membros nome="Visitante - "/>
            <Equipe />

            <h2>Componentes funcional e de classe.</h2>
            <br />

            <MeuComponenteClasse inseto="Gafanhoto" />
            <MeuComponenteFuncional inseta="Gafanhota" />

            <h2>Componente com estado.</h2>

            <Estado />

            <h2>Ciclo de vida.</h2>

            <Cliclodevida />

        </div>
    );

}
export default MeusComponentes;


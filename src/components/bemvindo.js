import React from "react";

/*funciona sem chave quanto é apenas uma linha
const Bemvindo = () => <h2>Bem vinda (o)</h2>*/

const Bemvindo = (props) => {

    return (

        <div>

            <h2>Seja Bem vindo ao mundo react, {props.nome} {props.estado}</h2>
            <p>Curso react em curso.</p>

            <div>
            
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis, orci ut tincidunt facilisis, risus ante
                    auctor ligula, non venenatis magna arcu id odio. FIM...

                </p>

            </div>

        </div>

    );
}

function BoasVindas() {

    return (

        <div>
            <Bemvindo nome="Cleber Garzaro!" estado="(stateless)" />
        </div>

    );
}

export default BoasVindas;


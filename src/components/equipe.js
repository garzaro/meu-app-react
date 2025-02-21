import React from "react";

/*posso pegar essa const e criar um componente de classe*/
const NossaEquipe = (props) => {
    
    return (
        <div>
            <Sobre username={props.nome} cargo={props.cargo} />

            <Social fb={props.facebook} insta={props.instagram}
                you={props.youtube}
                ud={props.udemy}
                git={props.github}
            />
            <hr />
        </div>
    );
}
/*posso pegar essa const e criar um componente de classe*/
const Sobre = (props) => {
    return (
        <div>
            <h3>Olá, sou {props.username}.</h3>
            <h3>Cargo: {props.cargo}</h3>
        </div>
    );
}

/*posso pegar essa const e criar um componente de classe*/
const Social = (props) => {
    return (
        <div>
            <a href={props.fb} target="_blank">Facebook | </a>
            <a href={props.insta} target="_blank"> Instagram | </a>
            <a href={props.you} target="_blank">Youtube | </a>
            <a href={props.ud} target="_blank">Udemy | </a>
            <a href={props.git} target="_blank">Github</a>
        </div>
    );
}


/*pode ser adicionado outras tags em <NossaEquipe - nome cargo, como em App.js>*/
function Equipe() {
    return (

        <div>
            <hr />
            <h3>Conheça nossa equipe de profissionais.</h3>

            <nav></nav>

            <NossaEquipe nome="Cleber" cargo="Aprendiz"
                facebook="https://www.facebook.com/cleber.garzaro/"
                instagram="https://www.instagram.com/clebergarzaro/"
                youtube="https://www.youtube.com/watch?v=pFgApiE6ZmQ&list=PLedVhPP7RyiKOiiGMTMYil3yTEoOxO7CK"
                udemy="https://www.udemy.com/user/dougllas-sousa/"
                github="https://github.com/garzaro" />

            <NossaEquipe nome="Lucas" cargo="Desenvolvedor"
                facebook="https://www.facebook.com/" />

            <NossaEquipe nome="Dougllas" cargo="Desenvolvedor"
                facebook="https://www.facebook.com/"
                udemy="https://cursodsousa.github.io/#"
                github="https://github.com/cursodsousa" />

        </div>

    );
}
export default Equipe;
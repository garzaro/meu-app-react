import React from "react";

/*funnciona sem chave quanto é apenas uma linha
const Bemvindo = () => <h2>Bem vinda (o)</h2>*/

const Bemvindo = (props) => {

  return (

    <div className="container">

      <h2>Seja Bem vindo ao mundo react, {props.nome}!</h2>
      <p>Curso react em curso.</p>

      <div>

      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Nulla convallis, orci ut tincidunt facilisis, risus ante 
          auctor ligula, non venenatis magna arcu id odio. Donec 
          pretium, risus et bibendum consequat, enim tellus tincidunt
          ipsum, eu elementum quam neque a urna. Praesent egestas 
          nec elit nec vestibulum. Sed et suscipit nulla, ut posuere 
          tellus. Proin maximus lectus ut nisl elementum, in mattis 
          diam varius. Nam fringilla, ex id fermentum venenatis, neque 
          nunc accumsan arcu, ut pulvinar eros nunc et ante. In hac 
          habitasse platea dictumst. Proin pulvinar libero ac nulla 
          auctor, nec ornare justo tincidunt. Aliquam erat volutpat. 
          Donec non leo eu felis gravida finibus. Cras vitae ullamcorper 
          purus, id cursus quam. Ut velit lorem, congue eget mollis a, 
          egestas vitae lorem. Etiam elementum nisi sit amet ex tristique 
          pellentesque. Interdum et malesuada fames ac ante ipsum primis 
          in faucibus.

      </p>


      </div>


    </div>


  );
}

function App() {

  return (

    <div className="App">

      <h1>Estudando react...</h1>

      <Bemvindo nome="Cleber" />

      vamos lá ;)

      <h3>Props - propriedade pode ser usada como parametros</h3>

      <h3>Stateless component</h3>


    </div>

  );

}

export default App;

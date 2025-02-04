import React from "react";
import MeusComponentes from "./componentes_C_F";

import 'bootswatch/dist/flatly/bootstrap.css'

function App() {

  return (

    <div className="container">

      <h1>Estudando react...</h1>

      vamos lá ;)

      <MeusComponentes />

      <hr />
      <h3>Props - propriedade pode ser usada como parametros</h3>
          <br />
      1 - Props são imutáveis no componente filho.
          <br />
      2 - Props podem ser atualizadas pelo componente pai.
          <br />
      3 - Quando o componente pai adiciona novas props o filho é reatualizado com novos valores.
 
      <hr />
      <h3>Stateless component</h3>

      <div>
        <p>
          1 - Não possui estado:
          <br />
          * Ele não armazena ou gerencia dados mutáveis internamente.
          <br />
          * Toda a informação que ele exibe ou usa é passada via props (propriedades).
        </p>
        <hr />

        <h3>Stateful component</h3>

        <p>
          1 - Possui estado:
          <br />
          * Um stateful component (ou componente com estado) gerencia seu próprio estado interno
          <br />
          * O componente com estado usa o Hook useState para gerenciar o estado interno.
          <br />
          * Ele é stateful porque gerencia dados mutáveis.
        </p>
      </div>
      <hr />
    </div>
  );
}

export default App;

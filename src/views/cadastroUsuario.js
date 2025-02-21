import React from "react";

import Card from "../components/card";
import Form from "../components/form";
import FormGroup from "../components/form-group";


function CadastroUsuario() {

    return (

        <div className="container">
            <Card>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">

                            <FormGroup label="Nome: *" htmlFor="inputNome">

                                <input type="text" id="inputNome" name="nome"
                                       onChange={} placeholder="Digite o nome" />

                            </FormGroup>

                        </div>
                    </div>
                </div>
            </Card>
            <div className="card-body">

            </div>
        </div>




    )
}
export default CadastroUsuario;
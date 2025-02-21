import React, {useState} from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

function Login() {

    /*useState gerencia email e senha*/
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    /*funcao callback*/
    const entrar = () => {

        if (!email) {
            alert("Por favor, preencha o campo email.");
            return;
        }

        if (!senha){
            alert("Por favor, preencha o campo senha.");

        }

        console.log('Email ', email);
        console.log('Senha ', senha);

    }


    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6" style={{position: 'relative', left: '300px'}}>
                    <div className="bs-docs-section">

                        <Card title="Login">

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">

                                        <fieldset >

                                            <FormGroup label="Email: *" htmlFor="exampleInputEmail1">

                                                <input type="email"

                                                       /*ação, mudanca de estado*/
                                                       value = {email}
                                                       onChange={(e) => setEmail(e.target.value)}

                                                       className="form-control"
                                                       id="exampleInputEmail1"
                                                       aria-describedby="emailHelp"
                                                       placeholder="Digite o email"/>

                                            </FormGroup>
                                            <br />
                                            <FormGroup label="Senha: *" htmlFor="">

                                                       <input type="password"

                                                       /*ação, mudanca de estado*/
                                                       value = {senha}
                                                       onChange={(e) => setSenha(e.target.value)}

                                                       className="form-control"
                                                       id="exampleInputPassword1"
                                                       aria-describedby="emailHelp"
                                                       placeholder="Digite a senha"/>

                                            </FormGroup>
                                            <br />
                                            <button onClick={entrar} type="button" className="btn btn-success">Entrar</button>

                                        </fieldset>

                                    </div>
                                </div>
                            </div>

                        </Card>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Login;
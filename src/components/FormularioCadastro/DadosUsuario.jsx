import React, { useState,useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function DadosUsuarios({ aoEnviar}) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const [erros, setErros] = useState({ senha: { valido: true, texto: "" } });

    const validacoes = useContext(ValidacoesCadastro);

    function validarCampos(event) {
        const {name,value} = event.target;
        const auxSenha = validacoes[name](value);

        const novoEstado = {...erros};
        novoEstado[name] = auxSenha;
        setErros(novoEstado);
    }

    function possoEnviar(){

        for(let campo in erros){
           if(!erros[campo].valido){
               return false;
           }
        }
        return true;
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email,senha});
            }
            
        }}>
            <TextField
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth />

            <TextField
                value={senha}
                onChange={(event) => {
                    setSenha(event.target.value);
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                name="senha"
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                margin="normal"
                required
                fullWidth />

            <Button type="submit" variant="contained" color="primary">Próximo   </Button>

        </form>
    );
}

export default DadosUsuarios;
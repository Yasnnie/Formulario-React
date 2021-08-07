import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";


function DadosPessoais({ aoEnviar}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promo, setPromo] = useState(true);
    const [novidade, setNovidade] = useState(false);
  


    const validacoes = useContext(ValidacoesCadastro);

    const [erros,validarCampos] = useErros(validacoes);

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
                aoEnviar({ nome, sobrenome, cpf, promo, novidade });
            }
        }}>

            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobrenome(event.target.value);
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    let tempCPF = event.target.value;

                    if (tempCPF.length >= 12) return tempCPF.substring(0, 12);
                    setCPF(tempCPF);
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                label="CPF"
                name="cpf"
                variant="outlined"
                margin="normal"
                required
                fullWidth
            />


            <FormControlLabel
                label="Promoções"
                control={<Switch name="promocoes"
                    checked={promo}
                    onChange={(event) => {
                        setPromo(event.target.checked);
                    }}
                    color="primary" />}

            />

            <FormControlLabel
                label="Novidades"
                control={<Switch name="novidades"
                    checked={novidade}
                    onChange={(event) => {
                        setNovidade(event.target.checked);
                    }}

                    color="primary" />}
            />

            <Button type="submit" variant="contained" color="primary">
                Próximo
            </Button>
        </form>
    );
}

export default DadosPessoais;
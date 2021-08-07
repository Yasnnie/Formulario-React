import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";


function DadosPessoais({aoEnviar, validarCPF}) {
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promo, setPromo] = useState(true);
    const [novidade, setNovidade] = useState(false);
    const [erros,setErros] = useState({cpf:{valido:true, texto:""}});

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome,sobrenome,cpf,promo,novidade});
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
                onBlur = {(event)=>{
                    const auxCPF = validarCPF(event.target.value);
                    setErros({cpf:auxCPF});
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="CPF"
                label="CPF"
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
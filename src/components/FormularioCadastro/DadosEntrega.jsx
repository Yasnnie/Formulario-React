import React, { useState } from 'react';
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({aoEnviar}) {
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [cep, setCep] = useState("");
    const [complemento, setComplento] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({estado,cidade,cep,endereco,numero,complemento});
        }}>
            <TextField
                value={estado}
                onChange={(event) => {
                    setEstado(event.target.value);
                }}
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                required
            />

            <TextField
                value={cidade}
                onChange={(event) => {
                    setCidade(event.target.value);
                }}
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                required
            />

            <TextField
                value={cep}
                onChange={(event) => {
                    setCep(event.target.value);
                }}
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                required
                fullWidth />



            <TextField
                value={endereco}
                onChange={(event) => {
                    setEndereco(event.target.value);
                }}
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                required
                margin="normal"
                fullWidth />

            <TextField
                value={numero}
                onChange={(event) => {
                    setNumero(event.target.value);
                }}
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                required
                margin="normal"
            />

            <TextField
                value={complemento}
                onChange={(event) => {
                    setComplento(event.target.value);
                }}
                id="complemento"
                label="Complemento"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    );
}

export default DadosEntrega;
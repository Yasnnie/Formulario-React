import React from 'react';
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
    return (
        <form action="">
            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
                required
                />

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
                required
                />

            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
                required
                fullWidth />
                


            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth />

            <TextField
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
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
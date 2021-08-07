import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuarios({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({email,senha});
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
import React from "react";
import { TextField, Button} from "@material-ui/core";

function DadosUsuarios({aoEnviar}) {
    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            aoEnviar();
        }}>
            <TextField
                id="email"
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth />

            <TextField
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
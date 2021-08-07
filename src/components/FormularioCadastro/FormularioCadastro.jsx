import React,{useState} from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}) {

    const [etapaAtual,setEtapaAtual] = useState(0);

    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }

    function formAtual(etapa){
        switch(etapa){
            case 0:
                return <DadosUsuario aoEnviar={proximo}/>;
            case 1: 
                return  <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>;
            case 2: 
                return <DadosEntrega/>;
            default:
                return <Typography>Erro</Typography> ;
        }
    }

    return (
       <section>
           {formAtual(etapaAtual, {aoEnviar, validarCPF})}
     
       </section>
    );
}



export default FormularioCadastro;
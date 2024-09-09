import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import CampoData from "../CampoData";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cpf,
      email,
      imagem,
      time,
    });

    setNome("");
    setCpf("");
    setEmail("");
    setImagem("");
    setTime("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome:"
          placeholder="seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="CPF:"
          placeholder="seu CPF"
          valor={cpf}
          aoAlterado={(valor) => setCpf(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="E-mail:"
          placeholder="seu e-mail"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />

        <CampoTexto
          label="Imagem:"
          placeholder="endereço da imagem"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />

        <CampoData />

        <ListaSuspensa
          obrigatorio={true}
          label="Empresa:"
          itens={props.nomeDosTimes}
          valor={time}
          aoAlterado={(valor) => setTime(valor)}
        />

        <Botao>Criar</Botao>
      </form>
    </section>
  );
};

export default Formulario;

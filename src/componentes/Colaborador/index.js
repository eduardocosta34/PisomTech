import "./Colaborador.css";

const Colaborador = ({ nome, imagem, cpf, email, corDeFundo }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt={nome} />
      </div>

      <div className="rodape">
        <h4>Nome: {nome}</h4>
        <h5>CPF: {cpf}</h5>
        <h5>E-mail: {email}</h5>
      </div>
    </div>
  );
};

export default Colaborador;

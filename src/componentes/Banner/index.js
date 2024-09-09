import "./Banner.css";

function Banner() {
  // JSX - parece html mas não é!
  return (
    <header className="banner">
      <div className="logo-pisom">
        <img src="/imagens/logo-pisom.svg" alt="Logo PisomTech" />
        <h1>Cadastro de Colaboradores</h1>
      </div>
      <div>
        <img src="/imagens/Group.svg" alt="Banner principal da página" />
      </div>
    </header>
  );
}

export default Banner;

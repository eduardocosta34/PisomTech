import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="rodape_footer">
      <ul className="rodape__lista">
        <li>
          <img src="/imagens/logo-pisom.svg" alt="" />
        </li>
        <li>DPO - Rocha Advogados</li>
        <li>OAB/SP 16.216</li>
        <li>lgpd@pisomtech.com.br</li>
      </ul>

      <ul className="rodape__lista">
        <li>
          <h4>Empresa</h4>
        </li>
        <li>Soluções</li>
        <li>Produtos</li>
        <li>Trabalhe conosco</li>
      </ul>

      <ul className="rodape__lista">
        <li>
          <h4>Jurídico</h4>
        </li>
        <li>Políticas de privacidade</li>
        <li>Termos de serviço</li>
      </ul>

      <ul className="rodape__lista">
        <li>
          <a href="instagram.com" target="_blank">
            <img src="/imagens/ig.svg" alt="instagram" />
          </a>
        </li>

        <li>
          <a href="linkedin.com" target="_blank">
            <img src="/imagens/linkedin.svg" alt="Linkedin" />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Rodape;

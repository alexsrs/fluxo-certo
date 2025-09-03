import React from 'react';
import './Footer.css';

export interface FooterProps {
  companyName?: string;
  year?: number;
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'Fluxo Certo',
  year = new Date().getFullYear(),
}) => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">{companyName}</h3>
            <p className="footer__description">
              Transformamos processos manuais em fluxos automatizados
              inteligentes, liberando sua equipe para focar no que realmente
              importa: fazer seu negócio crescer.
            </p>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Soluções</h4>
            <ul className="footer__links">
              <li>
                <a href="#automacao-vendas" className="footer__link">
                  Automação de Vendas
                </a>
              </li>
              <li>
                <a href="#automacao-marketing" className="footer__link">
                  Automação de Marketing
                </a>
              </li>
              <li>
                <a href="#automacao-processos" className="footer__link">
                  Automação de Processos
                </a>
              </li>
              <li>
                <a href="#integracao-sistemas" className="footer__link">
                  Integração de Sistemas
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Empresa</h4>
            <ul className="footer__links">
              <li>
                <a href="#sobre" className="footer__link">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#casos-sucesso" className="footer__link">
                  Casos de Sucesso
                </a>
              </li>
              <li>
                <a href="#blog" className="footer__link">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contato" className="footer__link">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__subtitle">Contato</h4>
            <ul className="footer__contact">
              <li className="footer__contact-item">
                <span className="footer__contact-label">Email:</span>
                <a
                  href="mailto:contato@fluxocerto.com"
                  className="footer__link"
                >
                  contato@fluxocerto.com
                </a>
              </li>
              <li className="footer__contact-item">
                <span className="footer__contact-label">WhatsApp:</span>
                <a href="https://wa.me/5511999999999" className="footer__link">
                  +55 (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {year} {companyName}. Todos os direitos reservados.
          </p>
          <div className="footer__legal">
            <a href="#privacidade" className="footer__legal-link">
              Política de Privacidade
            </a>
            <a href="#termos" className="footer__legal-link">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

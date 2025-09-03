import React, { useState } from 'react';
import './Header.css';
import Button from '../Button/Button';

export interface HeaderProps {
  logo?: string;
  companyName?: string;
  showCTA?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  companyName = 'Fluxo Certo',
  showCTA = true,
  ctaText = 'Falar com Especialista',
  onCTAClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          {logo ? (
            <img src={logo} alt={companyName} className="header__logo-image" />
          ) : (
            <h1 className="header__logo-text">{companyName}</h1>
          )}
        </div>

        <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li>
              <a
                href="#solucoes"
                className="header__nav-link"
                onClick={closeMenu}
              >
                Soluções
              </a>
            </li>
            <li>
              <a
                href="#beneficios"
                className="header__nav-link"
                onClick={closeMenu}
              >
                Benefícios
              </a>
            </li>
            <li>
              <a
                href="#depoimentos"
                className="header__nav-link"
                onClick={closeMenu}
              >
                Casos de Sucesso
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="header__nav-link"
                onClick={closeMenu}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>

        {/* Menu Hamburger para Mobile */}
        <button
          className={`header__menu-toggle ${
            isMenuOpen ? 'header__menu-toggle--open' : ''
          }`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {showCTA && (
          <div className="header__cta">
            <Button variant="primary" onClick={onCTAClick}>
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

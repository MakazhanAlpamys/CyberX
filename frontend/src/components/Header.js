import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImage from '../images/log.png';

const scan = keyframes`
  0% { background-position: 0% 0% }
  50% { background-position: 100% 0% }
  100% { background-position: 0% 0% }
`;

const pulse = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const HeaderContainer = styled.header`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  color: var(--dark-color);
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 224, 176, 0.3);
  
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon), transparent);
    animation: ${scan} 8s linear infinite;
    opacity: 0.7;
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled(Link)`
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 224, 176, 0.2);
    top: 0;
    left: 0;
    filter: blur(20px);
    z-index: -1;
  }
  
  &:hover {
    animation: ${glitch} 0.3s cubic-bezier(.25,.46,.45,.94);
  }
  
  img {
    height: 40px;
    filter: drop-shadow(0 0 5px var(--cyber-neon));
    transition: all 0.3s ease;
  }
  
  &:hover img {
    filter: drop-shadow(0 0 10px var(--cyber-neon));
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 15px;
    flex-direction: column;
    align-items: center;
    display: ${props => (props.isOpen ? 'flex' : 'none')};
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const NavItem = styled.li`
  margin-left: 25px;
  position: relative;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
  
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--cyber-neon);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
`;

const NavLink = styled(Link)`
  color: var(--dark-color);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  padding: 8px 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  font-weight: ${props => (props.$active ? 'bold' : 'normal')};
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => (props.$active ? 'rgba(0, 224, 176, 0.1)' : 'transparent')};
    border-radius: 4px;
    z-index: -1;
    transition: all 0.3s ease;
  }
  
  &:hover {
    color: var(--link-hover-color);
    text-shadow: 0 0 8px var(--link-hover-shadow);
    
    &::before {
      background: rgba(0, 224, 176, 0.1);
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: var(--dark-color);
  cursor: pointer;
  font-size: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
    position: absolute;
    right: 20px;
    top: 20px;
  }
`;

const CyberDecoration = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 224, 176, 0.3), transparent 70%);
  animation: ${pulse} 3s infinite;
  pointer-events: none;
  top: ${props => props.$top || '10px'};
  left: ${props => props.$left || '10px'};
  opacity: 0.5;
  filter: blur(5px);
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isActive = path => location.pathname === path;

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo to="/">
          <img src={logoImage} alt="CyberX Logo" />
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        
        <Nav isOpen={isMenuOpen}>
          <NavList>
            <NavItem $delay="0s">
              <NavLink to="/" $active={isActive('/')}>
                Главная
              </NavLink>
            </NavItem>
            <NavItem $delay="0.1s">
              <NavLink to="/catalog" $active={isActive('/catalog')}>
                Решения
              </NavLink>
            </NavItem>
            <NavItem $delay="0.2s">
              <NavLink to="/cyber-batyr" $active={isActive('/cyber-batyr')}>
                Cyber_Batyr
              </NavLink>
            </NavItem>
            <NavItem $delay="0.3s">
              <NavLink to="/about" $active={isActive('/about')}>
                О нас
              </NavLink>
            </NavItem>
            <NavItem $delay="0.4s">
              <NavLink to="/partners" $active={isActive('/partners')}>
                Нам доверяют
              </NavLink>
            </NavItem>
            <NavItem $delay="0.5s">
              <NavLink to="/contacts" $active={isActive('/contacts')}>
                Контакты
              </NavLink>
            </NavItem>
          </NavList>
        </Nav>
        
        <CyberDecoration $top="15px" $left="150px" />
        <CyberDecoration $top="25px" $left="85%" />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 
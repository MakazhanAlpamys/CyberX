import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import logoImage from '../images/log.png';

const scan = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const pulse = keyframes`
  0% { opacity: 0.8; }
  50% { opacity: 1; }
  100% { opacity: 0.8; }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const FooterContainer = styled.footer`
  background-color: rgba(255, 255, 255, 0.95);
  color: var(--dark-color);
  padding: 50px 0 20px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 224, 176, 0.3);
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon), transparent);
    opacity: 0.7;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 30%;
    height: 2px;
    background-color: var(--cyber-neon);
    animation: ${scan} 4s linear infinite;
    box-shadow: 0 0 15px var(--cyber-neon);
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
`;

const FooterColumn = styled.div`
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: var(--primary-color);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  position: relative;
  display: inline-block;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--cyber-neon);
    transition: width 0.3s ease;
  }
  
  ${FooterColumn}:hover &::after {
    width: 100%;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  margin-bottom: 12px;
  position: relative;
  padding-left: 15px;
  
  &::before {
    content: ">";
    position: absolute;
    left: 0;
    color: var(--cyber-neon);
    opacity: 0.7;
    font-family: monospace;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: translateX(3px);
  }
`;

const FooterLink = styled(Link)`
  color: var(--dark-color);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  
  &:hover {
    color: var(--link-hover-color);
    padding-left: 5px;
    text-shadow: 0 0 5px var(--link-hover-shadow);
  }
`;

const FooterText = styled.p`
  color: var(--dark-color);
  opacity: 0.8;
  line-height: 1.6;
  margin-bottom: 15px;
  font-size: 0.95rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
`;

const ContactIcon = styled.span`
  margin-right: 10px;
  color: var(--primary-color);
  font-size: 1.1rem;
`;

const ContactText = styled.span`
  color: var(--dark-color);
  font-size: 0.95rem;
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 40px;
  margin-top: 40px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const FooterCopyright = styled.p`
  color: var(--dark-color);
  opacity: 0.7;
  font-size: 0.9rem;
  
  span {
    color: var(--cyber-neon);
    animation: ${pulse} 2s infinite;
  }
`;

const CyberGrid = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 168, 133, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 168, 133, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  pointer-events: none;
  opacity: 0.3;
`;

const CyberDecoration = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 224, 176, 0.1), transparent 70%);
  top: ${props => props.$top || '10%'};
  left: ${props => props.$left || '10%'};
  opacity: 0.5;
  filter: blur(20px);
  pointer-events: none;
`;

const FooterLogo = styled.div`
  margin-bottom: 15px;
  
  img {
    height: 40px;
    filter: drop-shadow(0 0 5px var(--cyber-neon));
    transition: all 0.3s ease;
  }
  
  &:hover img {
    filter: drop-shadow(0 0 10px var(--cyber-neon));
    transform: scale(1.05);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CyberGrid />
      <CyberDecoration $top="20%" $left="80%" />
      <CyberDecoration $top="70%" $left="15%" />
      
      <FooterContent>
        <FooterColumn $delay="0s">
          <FooterTitle>О компании</FooterTitle>
          <FooterLogo>
            <Link to="/">
              <img src={logoImage} alt="CyberX Logo" />
            </Link>
          </FooterLogo>
          <FooterText>
            CyberX — лидер в области кибербезопасности, предлагающий современные решения для защиты вашего бизнеса от цифровых угроз.
          </FooterText>
        </FooterColumn>
        
        <FooterColumn $delay="0.4s">
          <FooterTitle>Полезные ссылки</FooterTitle>
          <FooterList>
            <FooterListItem>
              <FooterLink to="/">Главная</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink to="/about">О нас</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink to="/cyber-batyr">Cyber_Batyr</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink to="/catalog">Каталог продуктов</FooterLink>
            </FooterListItem>
            <FooterListItem>
              <FooterLink to="/contacts">Связаться с нами</FooterLink>
            </FooterListItem>
          </FooterList>
        </FooterColumn>
        
        <FooterColumn $delay="0.6s">
          <FooterTitle>Контакты</FooterTitle>
          <ContactItem>
            <ContactIcon><i className="fas fa-map-marker-alt"></i></ContactIcon>
            <ContactText>пр-т. Мангилик Ел. 55А, Астана 010000</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon><i className="fas fa-phone-alt"></i></ContactIcon>
            <ContactText>+7 777 333 6313</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon><i className="fas fa-envelope"></i></ContactIcon>
            <ContactText>
              b.shakmanov@cyberx.kz
              <br />
              support@cyberx.kz
            </ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon><i className="fas fa-clock"></i></ContactIcon>
            <ContactText>Пн-Пт: 9:00 - 18:00</ContactText>
          </ContactItem>
        </FooterColumn>
      </FooterContent>
      
      <FooterBottom>
        <FooterCopyright>
          &copy; {new Date().getFullYear()} <span>CyberX</span>. Все права защищены.
        </FooterCopyright>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer; 
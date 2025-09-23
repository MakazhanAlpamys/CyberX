import React from 'react';
import styled, { keyframes } from 'styled-components';

// Анимации
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scanLine = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
`;

const shine = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 249, 255, 0.4); }
  50% { box-shadow: 0 0 20px rgba(0, 249, 255, 0.7); }
  100% { box-shadow: 0 0 5px rgba(0, 249, 255, 0.4); }
`;

// Стили компонентов
const PartnersContainer = styled.div`
  padding: 20px 0;
  position: relative;
  animation: ${fadeIn} 0.8s ease forwards;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon), transparent);
    animation: ${scanLine} 8s linear infinite;
    opacity: 0.3;
    z-index: 1;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  color: var(--dark-color);
  margin-bottom: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  text-shadow: 0 0 10px rgba(0, 249, 255, 0.5);
  display: inline-block;
  width: 100%;
  
  &:hover {
    animation: ${glitch} 0.3s cubic-bezier(.25,.46,.45,.94) both infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon), transparent);
  }
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    letter-spacing: 2px;
    margin-bottom: 2rem;
    
    &::after {
      width: 100px;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin-bottom: 1.8rem;
    
    &::after {
      width: 80px;
    }
  }
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const LogoCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  border: 2px solid rgba(0, 249, 255, 0.4);
  position: relative;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    animation: ${shine} 2s infinite;
    border: 2px solid rgba(0, 249, 255, 0.9);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 7px;
    pointer-events: none;
    box-shadow: 0 0 0 1px rgba(0, 249, 255, 0.2);
  }
  
  img {
    max-height: 85%;
    max-width: 85%;
    object-fit: contain;
    transition: all 0.4s ease;
    filter: grayscale(100%);
    opacity: 0.85;
  }
  
  &:hover img {
    transform: scale(1.1);
    filter: grayscale(0%);
    opacity: 1;
  }
`;

const Partners = () => {
  // Данные о партнерах - убираем описания и теги, оставляем только id, name и logo
  const partners = [
    {
      id: 1,
      name: 'КМГ-Кумколь',
      logo: '/KMG.png'
    },
    {
      id: 2,
      name: 'Samurak Business Academy',
      logo: '/samurak.png'
    },
    {
      id: 3,
      name: 'РГУ СЦК',
      logo: '/RGU.png'
    },
    {
      id: 4,
      name: 'KazakhExport',
      logo: '/KAZEX.png'
    },
    {
      id: 5,
      name: 'КМГ Инжиниринг',
      logo: '/KMGI.png'
    },
    {
      id: 6,
      name: 'QIC',
      logo: '/QIC.jpeg'
    },
    {
      id: 7,
      name: 'MAK',
      logo: '/MAK.png'
    },
    {
      id: 8,
      name: 'TGA',
      logo: '/TGA.jpg'
    },
    {
      id: 9,
      name: 'IP',
      logo: '/IP.png'
    },
    {
      id: 10,
      name: 'AK',
      logo: '/AK.png'
    },
    {
      id: 11,
      name: 'SGO',
      logo: '/SGO.png'
    },
    {
      id: 12,
      name: 'AA',
      logo: '/AA.jpg'
    },
    {
      id: 13,
      name: '3MIS',
      logo: '/3MIS.png'
    },
    {
      id: 14,
      name: 'AITU',
      logo: '/AITU.png'
    },
    {
      id: 15,
      name: 'TT',
      logo: '/TT.jpg'
    },
    {
      id: 16,
      name: 'DAI',
      logo: '/DAI.jpeg'
    },
    {
      id: 17,
      name: 'AIO',
      logo: '/AIO.jpeg'
    }
  ];

  return (
    <PartnersContainer>
      <PageTitle>Нам доверяют</PageTitle>
      
      <LogoGrid>
        {partners.map((partner) => (
          <LogoCard key={partner.id}>
            <img src={require(`../images${partner.logo}`)} alt={`Логотип ${partner.name}`} />
          </LogoCard>
        ))}
      </LogoGrid>
    </PartnersContainer>
  );
};

export default Partners; 
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaShieldAlt, FaEye, FaStar } from 'react-icons/fa';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scanLine = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const glitch = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-3px, 3px); }
  40% { transform: translate(-3px, -3px); }
  60% { transform: translate(3px, 3px); }
  80% { transform: translate(3px, -3px); }
  100% { transform: translate(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(0, 255, 65, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(0, 255, 65, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 255, 65, 0); }
`;

const numberCount = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutContainer = styled.div`
  padding: 20px 0;
  position: relative;
  animation: ${fadeIn} 0.8s ease forwards;
  
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

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: var(--dark-color);
  margin: 40px 0 20px;
  text-align: center;
  position: relative;
  text-transform: uppercase;
  letter-spacing: 2px;
  display: inline-block;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 255, 65, 0.5);
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon), transparent);
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 15, 0, 0.8), rgba(0, 15, 0, 0.8)),
    url('https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000') center/cover no-repeat;
  color: var(--light-color);
  padding: 60px 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 25px 25px, var(--grid-color) 2px, transparent 0),
      radial-gradient(circle at 75px 75px, var(--grid-color) 1px, transparent 0);
    background-size: 100px 100px;
    opacity: 0.3;
    z-index: 0;
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon), transparent);
    opacity: 0.7;
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  animation: ${fadeIn} 1s ease forwards;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 15px rgba(0, 249, 255, 0.7);
  color: #ffffff;
  
  &:hover {
    animation: ${glitch} 0.3s cubic-bezier(.25,.46,.45,.94) both infinite;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  color: #ffffff;
`;

const Section = styled.section`
  margin-bottom: 50px;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
`;

const MissionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const ValueCard = styled.div`
  background-color: var(--primary-color);
  border-radius: 8px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2), 0 0 15px rgba(0, 224, 176, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 25px;
  }
  
  @media (max-width: 576px) {
    padding: 20px;
  }
`;

const ValueIcon = styled.div`
  color: var(--cyber-neon);
  font-size: 2.5rem;
  margin-bottom: 20px;
  
  svg {
    filter: drop-shadow(0 0 10px rgba(0, 224, 176, 0.5));
  }
`;

const ValueTitle = styled.h3`
  font-size: 1.8rem;
  color: #ffffff;
  margin-bottom: 15px;
  position: relative;
  display: inline-block;
  font-weight: 700;
  
  &::after {
    content: "";
    position: absolute;
    width: 50px;
    height: 3px;
    background-color: var(--cyber-neon);
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ValueDescription = styled.p`
  color: #ffffff;
  line-height: 1.7;
  font-size: 1.05rem;
`;

const StatsSection = styled.div`
  background-color: var(--primary-color);
  border-radius: 8px;
  padding: 40px;
  margin: 60px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 30px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    padding: 25px;
    gap: 25px;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 500;
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  color: var(--dark-color);
  margin-bottom: 2.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  text-shadow: 1px 1px 3px var(--heading-shadow);
  
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

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 992px) {
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <HeroSection>
        <HeroContent>
          <HeroTitle>О компании CyberX</HeroTitle>
          <HeroSubtitle>
            CyberX — ведущая компания в области кибербезопасности, предоставляющая комплексные решения для защиты бизнеса от современных киберугроз. Мы объединяем инновационные технологии, экспертные знания и индивидуальный подход для обеспечения безопасности наших клиентов.
          </HeroSubtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Наша миссия и ценности</SectionTitle>
        <MissionContainer>
          <ValueCard>
            <ValueIcon><FaShieldAlt size={42} /></ValueIcon>
            <ValueTitle>Миссия</ValueTitle>
            <ValueDescription>
              Обеспечивать надежную защиту информационных ресурсов наших клиентов, помогая им безопасно развивать свой бизнес в цифровом мире.
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon><FaEye size={42} /></ValueIcon>
            <ValueTitle>Видение</ValueTitle>
            <ValueDescription>
              Стать лидером инноваций в области кибербезопасности в Центральной Азии, создавая и внедряя передовые технологии защиты.
            </ValueDescription>
          </ValueCard>
          <ValueCard>
            <ValueIcon><FaStar size={42} /></ValueIcon>
            <ValueTitle>Ценности</ValueTitle>
            <ValueDescription>
              Профессионализм, ответственность, инновации, клиентоориентированность и постоянное развитие — ключевые принципы нашей работы.
            </ValueDescription>
          </ValueCard>
        </MissionContainer>
      </Section>

      <StatsSection>
          <StatItem>
            <StatNumber>10+</StatNumber>
          <StatLabel>Лет на рынке</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>200+</StatNumber>
          <StatLabel>Довольных клиентов</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>50+</StatNumber>
          <StatLabel>Профессионалов в команде</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>500+</StatNumber>
          <StatLabel>Успешных проектов</StatLabel>
          </StatItem>
      </StatsSection>

      {/* <Section>
        <SectionTitle>Наша команда</SectionTitle>
        <TeamContainer>
          {teamMembers.map(member => (
            <TeamMember key={member.id}>
              <MemberImage style={{ backgroundImage: `url(${member.image})` }} />
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberPosition>{member.position}</MemberPosition>
                <MemberBio>{member.bio}</MemberBio>
              </MemberInfo>
            </TeamMember>
          ))}
        </TeamContainer>
      </Section> */} 
       {/* о команде но временно нет */}
    </AboutContainer>
  );
};

export default About; 
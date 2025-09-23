import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaBolt, FaHeadset } from 'react-icons/fa';
import { getNews } from '../data/news';

const HeroSection = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000') center/cover no-repeat;
  color: #ffffff;
  padding: 80px 20px;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 40px;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
  text-shadow: 0 0 10px rgba(0, 224, 176, 0.5);

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: #ffffff;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
`;

const HeroButton = styled(Link)`
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--button-text);
  padding: 12px 30px;
  border-radius: 4px;
  font-weight: 500;
  transition: background-color 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: var(--secondary-color);
    color: var(--button-hover-text);
  }
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--dark-color);
  text-align: center;
`;

const FeaturesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  padding: 25px;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: var(--accent-color);
  display: flex;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--primary-color);
`;

const FeatureDescription = styled.p`
  color: var(--text-color);
  margin-bottom: 15px;
`;

const NewsSectionContainer = styled.section`
  margin: 40px 0;
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const NewsCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const NewsImage = styled.div`
  height: 200px;
  background-size: cover;
  background-position: center;
`;

const NewsContent = styled.div`
  padding: 20px;
`;

const NewsDate = styled.span`
  color: var(--text-light);
  font-size: 0.9rem;
  opacity: 0.8;
`;

const NewsTitle = styled.h3`
  margin: 10px 0;
  font-size: 1.3rem;
  color: var(--primary-color);
`;

const NewsItemText = styled.p`
  color: var(--text-color);
  font-size: 0.9rem;
`;

const NewsButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: var(--button-text);
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: var(--accent-color);
    color: var(--button-hover-text);
  }
`;

const ViewAllContainer = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const ViewAllLink = styled(Link)`
  display: inline-block;
  padding: 10px 25px;
  background-color: var(--primary-color);
  color: var(--button-text);
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--accent-color);
    color: var(--button-hover-text);
  }
`;

// Стили для раздела партнеров
const PartnersSection = styled.section`
  margin: 40px 0;
  text-align: center;
  padding: 20px;
  background-color: rgb(36, 137, 85);
  border-radius: 8px;
  
  ${SectionTitle} {
    color: #ffffff;
  }
`;

const PartnersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 25px 0;
`;

const PartnerLogo = styled.div`
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 249, 255, 0.3);
  transition: all 0.3s ease;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 249, 255, 0.5);
  }
`;

const PartnerLink = styled(Link)`
  text-decoration: none;
`;

const Home = () => {
  const newsItems = getNews({ sort: 'date-desc' }).slice(0, 3);

  // Логотипы партнеров
  const partnerLogos = [
    { id: 1, name: 'КМГ-Кумколь', logo: '/KMG.png' },
    { id: 2, name: 'Samurak Business Academy', logo: '/samurak.png' },
    { id: 3, name: 'РГУ СЦК', logo: '/RGU.png' },
    { id: 4, name: 'KazakhExport', logo: '/KAZEX.png' },
    { id: 5, name: 'КМГ Инжиниринг', logo: '/KMGI.png' },
    { id: 6, name: 'QIC', logo: '/QIC.jpeg' },
    { id: 7, name: 'MAK', logo: '/MAK.png' },
    { id: 8, name: 'TGA', logo: '/TGA.jpg' },
    { id: 9, name: 'IP', logo: '/IP.png' } ,
    { id: 10, name: 'AK', logo: '/AK.png' },
    { id: 11, name: 'SGO', logo: '/SGO.png' },
    { id: 12, name: 'AA', logo: '/AA.jpg' },
    { id: 13, name: '3MIS', logo: '/3MIS.png' },
    { id: 14, name: 'AITU', logo: '/AITU.png' },
    { id: 15, name: 'TT', logo: '/TT.jpg' },
    { id: 16, name: 'DAI', logo: '/DAI.jpeg' },
    { id: 17, name: 'AIO', logo: '/AIO.jpeg' }
  ];

  return (
    <div>
      <HeroSection>
        <HeroTitle>Кибербезопасность в надежных руках</HeroTitle>
        <HeroSubtitle>
          CyberX предлагает передовые решения в области кибербезопасности для защиты вашего бизнеса от современных угроз
        </HeroSubtitle>
        <HeroButton to="/catalog">Наши решения</HeroButton>
      </HeroSection>

      <section>
        <SectionTitle>Почему выбирают CyberX</SectionTitle>
        <FeaturesContainer>
          <FeatureCard>
            <FeatureIcon><FaShieldAlt size={42} /></FeatureIcon>
            <FeatureTitle>Комплексная защита</FeatureTitle>
            <FeatureDescription>Наши решения обеспечивают многоуровневую защиту от всех типов киберугроз</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon><FaBolt size={42} /></FeatureIcon>
            <FeatureTitle>Высокая производительность</FeatureTitle>
            <FeatureDescription>Решения CyberX работают эффективно без нагрузки на вашу инфраструктуру</FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon><FaHeadset size={42} /></FeatureIcon>
            <FeatureTitle>Поддержка экспертов</FeatureTitle>
            <FeatureDescription>Наша команда экспертов доступна 24/7 для решения любых вопросов</FeatureDescription>
          </FeatureCard>
        </FeaturesContainer>
      </section>

      <NewsSectionContainer>
        <SectionTitle>Последние новости</SectionTitle>
        <NewsGrid>
          {newsItems.map(news => (
            <NewsCard key={news.id}>
              {news.type === 'video' ? (
                <NewsImage style={{ 
                  backgroundImage: 'url(https://img.youtube.com/vi/' + news.video.split('/').pop() + '/maxresdefault.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }} />
              ) : (
                <NewsImage style={{ backgroundImage: `url(${news.image})` }} />
              )}
              <NewsContent>
                <NewsDate>{new Date(news.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</NewsDate>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsItemText>{news.excerpt}</NewsItemText>
                <NewsButton to={`/cyber-batyr/${news.id}`}>Подробнее</NewsButton>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
        <ViewAllContainer>
          <ViewAllLink to="/cyber-batyr">Все новости</ViewAllLink>
        </ViewAllContainer>
      </NewsSectionContainer>
      
      {/* Раздел с партнерами */}
      <PartnersSection>
        <SectionTitle>Нам доверяют</SectionTitle>
        <PartnersGrid>
          {partnerLogos.map(partner => (
            <PartnerLink key={partner.id} to="/partners">
              <PartnerLogo>
                <img src={require(`../images${partner.logo}`)} alt={`Логотип ${partner.name}`} />
              </PartnerLogo>
            </PartnerLink>
          ))}
        </PartnersGrid>
        <ViewAllContainer>
          <ViewAllLink to="/partners">Подробнее</ViewAllLink>
        </ViewAllContainer>
      </PartnersSection>
    </div>
  );
};

export default Home; 
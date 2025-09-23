import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { getNews } from '../data/news';

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

// Стили для страницы
const CyberBatyrContainer = styled.div`
  padding: 20px 0;
  position: relative;
  
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
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 0 0 10px rgba(0, 249, 255, 0.5);
  position: relative;
  display: inline-block;
  width: 100%;

  &:hover {
    animation: ${glitch} 0.3s cubic-bezier(.25,.46,.45,.94) both infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon), transparent);
  }
`;

const PageSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-color);
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background-color: var(--primary-color);
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-left: 3px solid var(--cyber-neon);
  position: relative;
  overflow: hidden;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0, 249, 255, 0.05), transparent);
    z-index: 0;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 249, 255, 0.05), transparent);
    z-index: 0;
    animation: lightSweep 3s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
  
  @keyframes lightSweep {
    0% { left: -100%; }
    50% { left: 100%; }
    100% { left: 100%; }
  }
`;

const SearchInput = styled.input`
  padding: 15px 20px;
  border: 2px solid var(--secondary-color);
  border-radius: 4px;
  width: 300px;
  font-size: 1rem;
  background-color: var(--input-bg);
  color: var(--input-text);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: var(--cyber-neon);
    box-shadow: 0 0 10px rgba(0, 249, 255, 0.5);
  }

  &::placeholder {
    color: var(--input-placeholder);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SortSelect = styled.select`
  padding: 15px 20px;
  border: 2px solid var(--secondary-color);
  border-radius: 4px;
  background-color: var(--input-bg);
  color: var(--input-text);
  font-size: 1rem;
  cursor: pointer;
  min-width: 200px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: var(--cyber-neon);
    box-shadow: 0 0 10px rgba(0, 249, 255, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.8s ease forwards;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  background-color: var(--primary-color);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border-top: 1px solid rgba(0, 249, 255, 0.3);
  border-left: 1px solid rgba(0, 249, 255, 0.2);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3), 
                0 0 15px rgba(0, 249, 255, 0.5), 
                0 0 30px rgba(0, 249, 255, 0.2);
    border-top: 1px solid rgba(0, 249, 255, 0.8);
    border-left: 1px solid rgba(0, 249, 255, 0.6);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, transparent, rgba(0, 249, 255, 0.1), transparent);
    z-index: -1;
    pointer-events: none;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const NewsImageWrapper = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`;

const NewsImage = styled.div`
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7));
    pointer-events: none;
  }
  
  ${NewsCard}:hover & {
    transform: scale(1.05);
  }
`;

const NewsVideoWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  background-color: #000;
  overflow: hidden;
`;

const NewsVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const NewsContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const NewsDate = styled.span`
  display: inline-block;
  color: var(--cyber-neon);
  font-size: 0.85rem;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

const NewsTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.4rem;
  color: #ffffff;
  position: relative;
  line-height: 1.3;
  height: 3.9rem; /* Примерно 3 строки */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  
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
  
  ${NewsCard}:hover &::after {
    width: 100%;
  }
`;

const NewsExcerpt = styled.p`
  color: #ffffff;
  opacity: 0.9;
  margin-bottom: 20px;
  flex-grow: 1;
  line-height: 1.5;
  height: 4.5rem; /* Примерно 3 строки */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const ReadMoreButton = styled.div`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  color: #ffffff;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  padding-right: 25px;
  
  &::after {
    content: "→";
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
  }
  
  ${NewsCard}:hover & {
    color: var(--cyber-neon);
    
    &::after {
      transform: translate(5px, -50%);
    }
  }
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.3rem;
  color: #ffffff;
  background-color: var(--primary-color);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-left: 3px solid var(--cyber-neon);
  animation: ${fadeIn} 0.8s ease forwards;
  
  p {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #ffffff;
    
    &::before, &::after {
      content: "<>";
      color: var(--cyber-neon);
      opacity: 0.7;
      font-family: monospace;
      position: absolute;
    }
    
    &::before {
      left: -20px;
    }
    
    &::after {
      right: -20px;
    }
  }
`;

// Стили для детальной страницы новости
const DetailPageContainer = styled.div`
  animation: ${fadeIn} 0.8s ease forwards;
`;

const BackButton = styled(Link)`
  display: inline-block;
  background-color: var(--accent-color);
  color: var(--button-text);
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  border: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: "←";
    margin-right: 8px;
  }
  
  @media (max-width: 576px) {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
`;

const DetailCard = styled.div`
  background-color: var(--primary-color);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease;
  position: relative;
  border-top: 1px solid rgba(0, 255, 65, 0.3);
  border-left: 1px solid rgba(0, 255, 65, 0.2);
  margin-bottom: 40px;
  
  &::before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    z-index: -1;
    background: linear-gradient(45deg, var(--cyber-neon), transparent, var(--cyber-purple), transparent, var(--cyber-neon));
    background-size: 400% 400%;
    animation: gradientBorder 15s ease infinite;
    border-radius: 12px;
    opacity: 0.3;
  }
  
  @keyframes gradientBorder {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const DetailHeader = styled.div`
  position: relative;
`;

const DetailHeaderImage = styled.div`
  height: 400px;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
  }
`;

const DetailHeaderVideo = styled.div`
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  background-color: #000;
`;

const DetailVideo = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const DetailHeaderContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  color: white;
  z-index: 1;
`;

const DetailTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const DetailDate = styled.div`
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 10px;
`;

const DetailBody = styled.div`
  padding: 30px;
  line-height: 1.8;
  color: #ffffff;
  
  p {
    margin-bottom: 20px;
  }
  
  ul, ol {
    margin-bottom: 20px;
    padding-left: 20px;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  strong {
    font-weight: 600;
    color: var(--cyber-neon);
  }
`;

const OtherNewsTitle = styled.h2`
  font-size: 2rem;
  color: var(--dark-color);
  margin-bottom: 30px;
  position: relative;
  padding-left: 20px;
  
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background-color: var(--cyber-neon);
  }
`;

// Основной компонент
const CyberBatyr = () => {
  const { newsId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('date-desc');
  const [filteredNews, setFilteredNews] = useState([]);
  const [currentNews, setCurrentNews] = useState(null);
  const [otherNews, setOtherNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Применение фильтров
  useEffect(() => {
    const filters = {
      search: searchTerm,
      sort: sortOption
    };
    
    const result = getNews(filters);
    setFilteredNews(result);
  }, [searchTerm, sortOption]);
  
  // Получение текущей новости по ID
  useEffect(() => {
    setLoading(true);
    setError(null);

    if (newsId) {
      const allNews = getNews();
      const news = allNews.find(n => n.id === parseInt(newsId));
      
      if (news) {
        setCurrentNews(news);
        
        // Получение других новостей того же типа
        const similar = allNews
          .filter(n => n.id !== parseInt(newsId))
          .sort(() => 0.5 - Math.random()) // Случайное перемешивание
          .slice(0, 3); // Берем только 3 новости
        
        setOtherNews(similar);
      } else {
        // Если новость не найдена
        setError("Новость не найдена. Возможно, она была удалена или перемещена.");
        setCurrentNews(null);
      }
    } else {
      setCurrentNews(null);
      setOtherNews([]);
    }
    setLoading(false);
  }, [newsId]);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  
  // Форматирование даты
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };
  
  // Показываем загрузку
  if (loading && newsId) {
    return (
      <CyberBatyrContainer>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '400px',
          flexDirection: 'column' 
        }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            borderRadius: '50%', 
            border: '3px solid transparent', 
            borderTop: '3px solid var(--cyber-neon)', 
            animation: 'spin 1s linear infinite' 
          }}></div>
          <p style={{ marginTop: '20px', color: 'var(--cyber-neon)' }}>Загрузка...</p>
        </div>
      </CyberBatyrContainer>
    );
  }
  
  // Если произошла ошибка
  if (error && newsId) {
    return (
      <CyberBatyrContainer>
        <DetailPageContainer>
          <BackButton to="/cyber-batyr">Вернуться к новостям</BackButton>
          <div style={{ 
            padding: '30px', 
            backgroundColor: 'rgba(255, 0, 0, 0.1)', 
            borderRadius: '8px',
            textAlign: 'center',
            marginBottom: '30px',
            border: '1px solid rgba(255, 0, 0, 0.3)'
          }}>
            <h2 style={{ color: '#ff6b6b', marginBottom: '15px' }}>Ошибка</h2>
            <p>{error}</p>
          </div>
          <BackButton to="/cyber-batyr">Вернуться к списку новостей</BackButton>
        </DetailPageContainer>
      </CyberBatyrContainer>
    );
  }
  
  // Если открыта детальная страница новости
  if (currentNews) {
    return (
      <CyberBatyrContainer>
        <DetailPageContainer>
          <BackButton to="/cyber-batyr">Вернуться к новостям</BackButton>
          
          <DetailCard>
            <DetailHeader>
              {currentNews.type === 'image' ? (
                <DetailHeaderImage style={{ backgroundImage: `url(${currentNews.image})` }} />
              ) : (
                <DetailHeaderVideo>
                  <DetailVideo 
                    src={currentNews.video} 
                    title={currentNews.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </DetailHeaderVideo>
              )}
              
              <DetailHeaderContent>
                <DetailDate>{formatDate(currentNews.date)}</DetailDate>
                <DetailTitle>{currentNews.title}</DetailTitle>
              </DetailHeaderContent>
            </DetailHeader>
            
            <DetailBody dangerouslySetInnerHTML={{ __html: currentNews.content }} />
          </DetailCard>
          
          {otherNews.length > 0 && (
            <>
              <OtherNewsTitle>Другие материалы</OtherNewsTitle>
              <NewsGrid>
                {otherNews.map(news => (
                  <NewsCard key={news.id} as={Link} to={`/cyber-batyr/${news.id}`}>
                    {news.type === 'image' ? (
                      <NewsImageWrapper>
                        <NewsImage style={{ backgroundImage: `url(${news.image})` }} />
                      </NewsImageWrapper>
                    ) : (
                      <NewsVideoWrapper>
                        <NewsVideo 
                          src={news.video} 
                          title={news.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        />
                      </NewsVideoWrapper>
                    )}
                    
                    <NewsContent>
                      <NewsDate>{formatDate(news.date)}</NewsDate>
                      <NewsTitle>{news.title}</NewsTitle>
                      <NewsExcerpt>{news.excerpt}</NewsExcerpt>
                      <ReadMoreButton>Подробнее</ReadMoreButton>
                    </NewsContent>
                  </NewsCard>
                ))}
              </NewsGrid>
            </>
          )}
          
          <BackButton to="/cyber-batyr">Вернуться к новостям</BackButton>
        </DetailPageContainer>
      </CyberBatyrContainer>
    );
  }
  
  // Список новостей
  return (
    <CyberBatyrContainer>
      <PageTitle>Cyber_Batyr</PageTitle>
      <PageSubtitle>
        Новости и материалы из мира кибербезопасности от экспертов CyberX
      </PageSubtitle>
      
      <FilterContainer>
        <SearchInput 
          type="text" 
          placeholder="Поиск по материалам..." 
          value={searchTerm}
          onChange={handleSearchChange}
        />
        
        <SortSelect value={sortOption} onChange={handleSortChange}>
          <option value="date-desc">Сначала новые</option>
          <option value="date-asc">Сначала старые</option>
          <option value="alpha-asc">По алфавиту (А-Я)</option>
          <option value="alpha-desc">По алфавиту (Я-А)</option>
        </SortSelect>
      </FilterContainer>
      
      {filteredNews.length > 0 ? (
        <NewsGrid>
          {filteredNews.map(news => (
            <NewsCard key={news.id} as={Link} to={`/cyber-batyr/${news.id}`}>
              {news.type === 'image' ? (
                <NewsImageWrapper>
                  <NewsImage style={{ backgroundImage: `url(${news.image})` }} />
                </NewsImageWrapper>
              ) : (
                <NewsVideoWrapper>
                  <NewsVideo 
                    src={news.video} 
                    title={news.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </NewsVideoWrapper>
              )}
              
              <NewsContent>
                <NewsDate>{formatDate(news.date)}</NewsDate>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsExcerpt>{news.excerpt}</NewsExcerpt>
                <ReadMoreButton>Подробнее</ReadMoreButton>
              </NewsContent>
            </NewsCard>
          ))}
        </NewsGrid>
      ) : (
        <NoResultsMessage>
          <p>По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.</p>
        </NoResultsMessage>
      )}
    </CyberBatyrContainer>
  );
};

export default CyberBatyr; 
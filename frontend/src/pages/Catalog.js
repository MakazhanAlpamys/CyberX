import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { catalog, services } from '../data/catalog';
import { FaShoppingCart } from 'react-icons/fa';

const scanLine = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
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
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const CatalogContainer = styled.div`
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
  text-shadow: 0 0 10px rgba(0, 249, 255, 0.5);
  position: relative;
  display: inline-block;
  width: 100%;
  overflow-wrap: break-word;
  word-break: break-word;

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
  
  @media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 2px;
    margin-bottom: 1.8rem;
    
    &::after {
      width: 100px;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 1.6rem;
    letter-spacing: 1px;
    margin-bottom: 1.5rem;
    
    &::after {
      width: 80px;
    }
  }
`;

const SearchInput = styled.input`
  padding: 15px 20px;
  border: 2px solid var(--secondary-color);
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  background-color: var(--input-bg);
  color: var(--input-text);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

  &:focus {
    outline: none;
    border-color: var(--cyber-neon);
    box-shadow: 0 0 10px rgba(0, 224, 176, 0.5);
  }

  &::placeholder {
    color: var(--input-placeholder);
  }
  
  @media (max-width: 576px) {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
`;

const CategoryOverviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  margin-top: 30px;
  animation: ${fadeIn} 1s ease forwards;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CategoryCard = styled.div`
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 3px solid rgba(0, 224, 176, 0.4);
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 0 15px rgba(0, 224, 176, 0.3);
    border-color: rgba(0, 224, 176, 0.7);
    
    &::before {
      opacity: 1;
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0, 224, 176, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 1;
    pointer-events: none;
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 25px;
    height: 25px;
    border-bottom: 3px solid var(--cyber-neon);
    border-right: 3px solid var(--cyber-neon);
    opacity: 0.7;
  }
`;

const ProductCounter = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(0, 224, 176, 0.9);
  color: #fff;
  border-radius: 4px;
  padding: 2px 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.7rem;
  z-index: 10;
  box-shadow: 0 0 5px rgba(0, 224, 176, 0.5);
  white-space: nowrap;
  
  &::after {
    content: "";
  }
`;

const CategoryContent = styled.div`
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoryTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: var(--dark-color);
  position: relative;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.3;
  width: 100%;
  word-wrap: break-word;
  height: auto;
  
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
  
  ${CategoryCard}:hover &::after {
    width: 100%;
  }
`;

const CategoryDescription = styled.p`
  color: var(--dark-color);
  margin-bottom: 15px;
  flex-grow: 1;
  line-height: 1.5;
  font-size: 0.9rem;
  opacity: 0.9;
  min-height: 2.7rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CategoryFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const ViewButton = styled.span`
  display: inline-flex;
  align-items: center;
  color: var(--cyber-neon);
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
  
  ${CategoryCard}:hover & {
    color: var(--dark-color);
    
    &::after {
      transform: translate(5px, -50%);
    }
  }
`;

const DetailViewContainer = styled.div`
  animation: ${fadeIn} 0.8s ease forwards;
`;

const BackButton = styled.button`
  background-color: var(--accent-color);
  color: var(--button-text);
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: inline-block;
  transition: all 0.3s ease;
  margin-bottom: 30px;
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

const CategoryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 15px;
  border-bottom: 2px solid var(--accent-color);
  position: relative;
  flex-wrap: wrap;
  
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100px;
    height: 2px;
    background-color: var(--cyber-neon);
    animation: ${pulse} 3s infinite;
  }
  
  @media (max-width: 576px) {
    padding-bottom: 10px;
    margin-bottom: 1rem;
    
    &::before {
      width: 60px;
    }
  }
`;

const DetailCategoryTitle = styled.h2`
  font-size: 2.2rem;
  color: var(--dark-color);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  display: inline-block;
  text-shadow: 0 0 8px rgba(0, 224, 176, 0.3);
  word-break: break-word;
  
  &::before {
    content: "//";
    position: absolute;
    left: -25px;
    color: var(--cyber-neon);
    opacity: 0.7;
  }
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    
    &::before {
      left: -20px;
    }
  }
`;

const DetailCategoryDescription = styled.p`
  color: var(--dark-color);
  margin-bottom: 30px;
  font-size: 1.1rem;
  max-width: 800px;
  line-height: 1.7;
  border-left: 3px solid var(--cyber-neon);
  padding-left: 15px;
  animation: ${fadeIn} 0.5s ease forwards;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const ProductCard = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 3px solid rgba(0, 224, 176, 0.4);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15), 0 0 15px rgba(0, 224, 176, 0.3);
    border-color: rgba(0, 224, 176, 0.7);
    
    &::before {
      opacity: 1;
    }
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0, 224, 176, 0.05), transparent);
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 1;
    pointer-events: none;
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 35px;
    height: 35px;
    border-bottom: 3px solid var(--cyber-neon);
    border-right: 3px solid var(--cyber-neon);
    opacity: 0.7;
  }
  
  @media (max-width: 576px) {
    &:hover {
      transform: translateY(-5px);
    }
    
    &::after {
      width: 25px;
      height: 25px;
    }
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent);
    z-index: 1;
  }
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
`;

const ProductImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  font-weight: bold;
  font-size: 0.95rem;
  z-index: 2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  text-align: center;
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
    padding: 8px;
  }
`;

const ProductContent = styled.div`
  padding: 15px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 1.3rem;
  color: var(--dark-color);
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  word-break: break-word;
  text-align: center;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background-color: var(--cyber-neon);
    transition: width 0.3s ease;
  }
  
  ${ProductCard}:hover &::after {
    width: 80%;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

const ProductDescription = styled.p`
  color: var(--dark-color);
  margin-bottom: 20px;
  flex-grow: 1;
  line-height: 1.6;
  font-size: 0.95rem;
  word-wrap: break-word;
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
    line-height: 1.5;
  }
`;

const ProductFeatures = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 15px;
`;

const ProductFeature = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: var(--dark-color);
  transition: transform 0.3s ease;
  word-wrap: break-word;
  
  &:hover {
    transform: translateX(5px);
  }
  
  &:before {
    content: "✓";
    color: var(--cyber-neon);
    margin-right: 10px;
    font-weight: bold;
    flex-shrink: 0;
  }
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
    padding: 6px 0;
  }
`;

const SearchFilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
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
    background: linear-gradient(45deg, transparent, rgba(0, 224, 176, 0.05), transparent);
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 30px;
  }
  
  @media (max-width: 576px) {
    padding: 15px;
    margin-bottom: 20px;
  }
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 1.3rem;
  color: var(--dark-color);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  border-left: 3px solid var(--cyber-neon);
  animation: ${fadeIn} 0.8s ease forwards;
  
  p {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    
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

const OrderButton = styled.button`
  position: absolute;
  bottom: 15px;
  right: 15px;
  background-color: var(--cyber-neon);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 15px;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: #008c42;
  }
  
  ${ProductCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const selectCategory = (categoryId) => {
    const category = categoryId === 'services' 
      ? { id: 'services', title: 'Услуги и консалтинг', description: 'Профессиональные услуги в области кибербезопасности', products: services.map(s => ({...s, name: s.title, features: s.features, image: s.image})) }
      : catalog.find(cat => cat.id === categoryId);
    
    setSelectedCategory(category);
    
    // При выборе категории сбрасываем поиск
    setSearchTerm('');
    setFilteredProducts(category ? category.products : []);
  };
  
  const backToCategories = () => {
    setSelectedCategory(null);
    setSearchTerm('');
  };
  
  useEffect(() => {
    if (selectedCategory && searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const filtered = selectedCategory.products.filter(product => {
        return (
          product.name.toLowerCase().includes(searchLower) ||
          product.description.toLowerCase().includes(searchLower) ||
          product.features.some(feature => feature.toLowerCase().includes(searchLower))
        );
      });
      setFilteredProducts(filtered);
    } else if (selectedCategory) {
      setFilteredProducts(selectedCategory.products);
    }
  }, [searchTerm, selectedCategory]);
  
  const allCategories = [...catalog, {
    id: "services",
    title: "Услуги и консалтинг",
    description: "Профессиональные услуги в области кибербезопасности",
    products: services
  }];
  
  // Убираем дубликаты категорий по id
  const uniqueCategories = Array.from(
    new Map(allCategories.map(cat => [cat.id, cat])).values()
  );
  
  const filteredCategories = searchTerm 
    ? uniqueCategories.filter(cat => 
        cat.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        cat.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : uniqueCategories;

  return (
    <CatalogContainer>
      <PageTitle className="glitch-text">Каталог продуктов и решений</PageTitle>
      
      {selectedCategory ? (
        <DetailViewContainer>
          <BackButton onClick={backToCategories}>Вернуться к категориям</BackButton>
          
          <SearchFilterContainer>
            <SearchInput 
              type="text" 
              placeholder="Поиск по продуктам в категории..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchFilterContainer>
          
          <CategoryHeader>
            <DetailCategoryTitle>{selectedCategory.title}</DetailCategoryTitle>
          </CategoryHeader>
          <DetailCategoryDescription>{selectedCategory.description}</DetailCategoryDescription>
          
          {filteredProducts.length > 0 ? (
            <ProductsGrid>
              {filteredProducts.map(product => (
                <ProductCard key={product.id}>
                  <ProductImage style={{ backgroundImage: `url(${product.image})` }}>
                    <ProductImageOverlay>{product.name}</ProductImageOverlay>
                  </ProductImage>
                  <ProductContent>
                    <ProductName>{product.name}</ProductName>
                  </ProductContent>
                  <OrderButton onClick={() => window.open('https://wa.me/77773336313?text=Я%20интересуюсь%20продуктом%20' + encodeURIComponent(product.name), '_blank')}>
                    Заказать <FaShoppingCart />
                  </OrderButton>
                </ProductCard>
              ))}
            </ProductsGrid>
          ) : (
            <NoResultsMessage>
              <p>По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.</p>
            </NoResultsMessage>
          )}
          
          <BackButton onClick={backToCategories} style={{ marginTop: '30px' }}>Вернуться к категориям</BackButton>
        </DetailViewContainer>
      ) : (
        <>
          <SearchFilterContainer>
            <SearchInput 
              type="text" 
              placeholder="Поиск по категориям..." 
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </SearchFilterContainer>
          
          {filteredCategories.length > 0 ? (
            <CategoryOverviewGrid>
              {filteredCategories.map(category => (
                <CategoryCard key={category.id} onClick={() => selectCategory(category.id)}>
                  <ProductCounter>
                    {category.products.length}
                    <span style={{ 
                      marginLeft: '3px', 
                      fontSize: '0.65rem', 
                      opacity: '0.9' 
                    }}>
                      {category.products.length === 1 ? 'решение' : 
                       (category.products.length > 1 && category.products.length < 5) ? 'решения' : 'решений'}
                    </span>
                  </ProductCounter>
                  <CategoryContent>
                    <CategoryTitle>{category.title}</CategoryTitle>
                    <CategoryDescription>{category.description}</CategoryDescription>
                    <CategoryFooter>
                      <ViewButton>Посмотреть решения</ViewButton>
                    </CategoryFooter>
                  </CategoryContent>
                </CategoryCard>
              ))}
            </CategoryOverviewGrid>
          ) : (
            <NoResultsMessage>
              <p>По вашему запросу ничего не найдено. Попробуйте изменить параметры поиска.</p>
            </NoResultsMessage>
          )}
        </>
      )}
    </CatalogContainer>
  );
};

export default Catalog; 
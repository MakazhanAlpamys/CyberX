import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
import { FaMapMarkerAlt, FaEnvelope, FaShieldAlt, FaLock, FaPhoneAlt, FaHeadset } from 'react-icons/fa';
import officePhoto from '../images/photo.jpeg';

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

const gridlines = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 0.5; }
  100% { opacity: 0.2; }
`;

const ContactsContainer = styled.div`
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

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 25px 25px, var(--cyber-neon) 1px, transparent 2px),
      radial-gradient(circle at 75px 75px, var(--cyber-neon) 1px, transparent 2px);
    background-size: 100px 100px;
    opacity: 0.05;
    pointer-events: none;
    z-index: -1;
    animation: ${gridlines} 4s ease-in-out infinite;
  }
`;

const CyberDecorationTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--cyber-neon) 25%, 
    transparent 50%,
    var(--cyber-neon) 75%, 
    transparent 100%
  );
  opacity: 0.7;
  z-index: 5;
`;

const CyberDecorationBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, 
    transparent 0%, 
    var(--cyber-neon) 15%, 
    transparent 30%,
    var(--cyber-neon) 50%, 
    transparent 70%,
    var(--cyber-neon) 85%, 
    transparent 100%
  );
  opacity: 0.7;
  z-index: 5;
`;

const PageTitle = styled.h1`
  font-size: 2.8rem;
  color: var(--dark-color);
  margin-bottom: 1.8rem;
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
    margin-bottom: 1.5rem;
    
    &::after {
      width: 100px;
    }
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin-bottom: 1.2rem;
    
    &::after {
      width: 80px;
    }
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
  animation: ${fadeIn} 1s ease forwards;
  animation-delay: 0.3s;
  opacity: 0;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  position: relative;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ContactInfoCard = styled.div`
  background-color: var(--primary-color);
  border-radius: 8px;
  padding: 35px;
  color: var(--dark-bg-text);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--cyber-neon), transparent);
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 3px;
    background: var(--cyber-neon);
    opacity: 0.5;
  }
  
  @media (max-width: 576px) {
    padding: 25px;
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--dark-bg-text);
  display: flex;
  align-items: center;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 15px;
  
  svg {
    margin-right: 12px;
    color: var(--cyber-neon);
    font-size: 1.6rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 30px;
  
  @media (max-width: 576px) {
    gap: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 10px 0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
  }
  
  svg {
    margin-right: 15px;
    font-size: 1.5rem;
    color: var(--cyber-neon);
    margin-top: 5px;
  }
  
  @media (max-width: 576px) {
    svg {
      font-size: 1.3rem;
      margin-right: 12px;
    }
  }
`;

const ContactItemContent = styled.div`
  flex: 1;
`;

const ContactItemTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 6px;
  color: var(--dark-bg-text);
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const ContactItemText = styled.p`
  color: var(--dark-bg-text);
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.15rem;
  
  @media (max-width: 576px) {
    font-size: 1.05rem;
  }
`;

const ContactFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 30px;
  
  @media (max-width: 992px) {
    gap: 15px;
  }
`;

const ContactFeatureItem = styled.div`
  display: flex;
  align-items: center;
  background: rgba(0, 255, 240, 0.07);
  padding: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  border-left: 3px solid var(--cyber-neon);
  
  &:hover {
    transform: translateX(5px);
    background: rgba(0, 255, 240, 0.12);
  }
  
  svg {
    margin-right: 15px;
    color: var(--cyber-neon);
    font-size: 1.8rem;
  }
  
  span {
    font-size: 1.1rem;
    color: var(--dark-bg-text);
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 600;
  }
  
  @media (max-width: 576px) {
    svg {
      font-size: 1.5rem;
    }
    
    span {
      font-size: 1rem;
    }
  }
`;

const ContactFormCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 35px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon));
  }
  
  @media (max-width: 576px) {
    padding: 25px;
  }
`;

const ContactFormTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 30px;
  color: var(--accent-color);
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  position: relative;
  display: inline-block;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(0, 224, 176, 0.3);
  
  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 50%;
    height: 2px;
    background: var(--cyber-neon);
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
  
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: var(--dark-color);
  font-weight: 600;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.15rem;
  
  @media (max-width: 576px) {
    margin-bottom: 8px;
    font-size: 1.05rem;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  font-family: 'Roboto Condensed', sans-serif;
  color: var(--dark-color);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(0, 192, 139, 0.2);
  }
  
  @media (max-width: 576px) {
    padding: 12px 15px;
    font-size: 1rem;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  font-family: 'Roboto Condensed', sans-serif;
  min-height: 150px;
  resize: vertical;
  color: var(--dark-color);
  
  &:focus {
    outline: none;
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 3px rgba(0, 192, 139, 0.2);
  }
  
  @media (max-width: 576px) {
    padding: 12px 15px;
    font-size: 1rem;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background-color: var(--secondary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 14px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Roboto Condensed', sans-serif;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: all 0.5s ease;
  }
  
  &:hover {
    background-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 576px) {
    padding: 12px 25px;
    font-size: 1rem;
  }
`;

const Alert = styled.div`
  padding: 12px 15px;
  margin-bottom: 20px;
  border-radius: 4px;
  font-weight: 500;
  font-family: 'Roboto Condensed', sans-serif;
  
  &.success {
    background-color: rgba(0, 200, 83, 0.1);
    color: #00c853;
    border-left: 4px solid #00c853;
  }
  
  &.error {
    background-color: rgba(255, 0, 0, 0.1);
    color: #f44336;
    border-left: 4px solid #f44336;
  }
  
  @media (max-width: 576px) {
    padding: 10px;
    font-size: 0.95rem;
  }
`;

const MapSection = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  position: relative;
  
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 50%;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--cyber-neon), transparent);
    transform: translateX(-50%);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MapContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 400px;
  position: relative;
  border: 1px solid rgba(0, 249, 255, 0.3);
  
  &::after {
    content: "Местоположение";
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: var(--cyber-neon);
    padding: 5px 12px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
  
  @media (max-width: 576px) {
    height: 300px;
  }
`;

const OfficePhotoContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 400px;
  position: relative;
  border: 1px solid rgba(0, 249, 255, 0.3);
  
  &::after {
    content: "Наш офис";
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
    color: var(--cyber-neon);
    padding: 5px 12px;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 2;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
    filter: brightness(1.03);
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
  
  @media (max-width: 576px) {
    height: 300px;
  }
`;

const Contacts = () => {
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    type: '',
    message: ''
  });
  
  // Эффект печатающейся машинки для субтитра
  useEffect(() => {
    // Простая демонстрация того, что компонент может использовать эффекты
    const timer = setTimeout(() => {
      // Можно добавить что-то еще при необходимости
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post(`${API_URL}/contacts`, formData);
      
      setAlert({
        show: true,
        type: 'success',
        message: 'Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
      });
      
      // Очистка формы
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Ошибка при отправке формы:', error);
      
      let errorMessage = 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.';
      
      if (error.response && error.response.data && error.response.data.message) {
        errorMessage = error.response.data.message;
      }
      
      setAlert({
        show: true,
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
      
      // Скрыть уведомление через 5 секунд
      setTimeout(() => {
        setAlert({ show: false, type: '', message: '' });
      }, 5000);
    }
  };
  
  return (
    <ContactsContainer>
      <CyberDecorationTop />
      <CyberDecorationBottom />
      
      <PageTitle>Свяжитесь с нами</PageTitle>
      <PageSubtitle>
        У вас есть вопросы или вам нужна консультация? Оставьте заявку, и наши специалисты по кибербезопасности свяжутся с вами в ближайшее время
      </PageSubtitle>
      
      <ContentContainer>
        <ContactInfoCard>
          <ContactInfoTitle>
            <FaShieldAlt /> Контактная информация
          </ContactInfoTitle>
          <ContactInfoList>
            <ContactItem>
              <FaMapMarkerAlt />
              <ContactItemContent>
                <ContactItemTitle>Адрес</ContactItemTitle>
                <ContactItemText>пр-т. Мангилик Ел. 55А, Астана 010000</ContactItemText>
              </ContactItemContent>
            </ContactItem>
            <ContactItem>
              <FaPhoneAlt />
              <ContactItemContent>
                <ContactItemTitle>Телефон</ContactItemTitle>
                <ContactItemText>+7 777 333 6313</ContactItemText>
              </ContactItemContent>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <ContactItemContent>
                <ContactItemTitle>Email</ContactItemTitle>
                <ContactItemText>
                  b.shakmanov@cyberx.kz
                  <br />
                  support@cyberx.kz
                </ContactItemText>
              </ContactItemContent>
            </ContactItem>
          </ContactInfoList>
          
          <ContactFeatures>
            <ContactFeatureItem>
              <FaLock />
              <span>Гарантированная безопасность</span>
            </ContactFeatureItem>
            <ContactFeatureItem>
              <FaShieldAlt />
              <span>Конфиденциальность данных</span>
            </ContactFeatureItem>
            <ContactFeatureItem>
              <FaHeadset />
              <span>Экспертная поддержка</span>
            </ContactFeatureItem>
          </ContactFeatures>
        </ContactInfoCard>
        
        <ContactFormCard>
          <ContactFormTitle>Отправьте сообщение</ContactFormTitle>
          
          {alert.show && (
            <Alert className={alert.type}>
              {alert.message}
            </Alert>
          )}
          
          <form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <FormLabel>Ваше имя *</FormLabel>
                <FormInput 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="Введите ваше имя" 
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email *</FormLabel>
                <FormInput 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="Введите ваш email" 
                  required
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <FormLabel>Телефон</FormLabel>
                <FormInput 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  placeholder="+7 (___) ___-__-__"
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Тема *</FormLabel>
                <FormInput 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange}
                  placeholder="Введите тему сообщения" 
                  required
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <FormLabel>Сообщение *</FormLabel>
              <FormTextarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange}
                placeholder="Опишите ваш запрос подробнее..." 
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
            </SubmitButton>
          </form>
        </ContactFormCard>
      </ContentContainer>
      
      <MapSection>
        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8442059037374!2d71.41631231603081!3d51.119458679573326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424585a4e2e675f3%3A0xd5a2f5a6f6f3303b!2z0JzQsNC90LPQuNC70LjQuiDQldC7LCA1NSwg0J3Rg9GALdCh0YPQu9GC0LDQvSAwMTAwMDA!5e0!3m2!1sru!2skz!4v1651923625246!5m2!1sru!2skz" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Расположение офиса CyberX"
          ></iframe>
        </MapContainer>
        
        <OfficePhotoContainer>
          <img src={officePhoto} alt="Офис CyberX" />
        </OfficePhotoContainer>
      </MapSection>
    </ContactsContainer>
  );
};

export default Contacts; 
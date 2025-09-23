const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');

// Загрузка переменных окружения
dotenv.config();

// Инициализация Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Конфигурация базы данных
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'cyberx',
  password: process.env.DB_PASSWORD || 'postgres',
  port: process.env.DB_PORT || 5432,
});

// Проверка соединения с базой данных
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('База данных подключена успешно');
  }
});

// API маршруты
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Валидация данных
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Пожалуйста, заполните все обязательные поля' 
      });
    }
    
    // Сохранение данных в БД
    const result = await pool.query(
      'INSERT INTO contacts (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING id',
      [name, email, phone, subject, message]
    );
    
    return res.status(201).json({ 
      success: true, 
      message: 'Сообщение успешно отправлено', 
      contactId: result.rows[0].id 
    });
  } catch (error) {
    console.error('Ошибка при обработке запроса:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Произошла ошибка при обработке запроса' 
    });
  }
});

// Маршрут для проверки состояния API
app.get('/api/status', (req, res) => {
  res.json({ status: 'API работает' });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
}); 
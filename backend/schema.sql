-- Создание базы данных (запустить отдельно)
-- CREATE DATABASE cyberx;

-- Подключение к базе данных
-- \c cyberx;

-- Таблица для хранения контактных форм
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  subject VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Создание индексов
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at);

-- Комментарии к таблице
COMMENT ON TABLE contacts IS 'Контактные формы с сайта';
COMMENT ON COLUMN contacts.id IS 'Уникальный идентификатор';
COMMENT ON COLUMN contacts.name IS 'Имя отправителя';
COMMENT ON COLUMN contacts.email IS 'Email отправителя';
COMMENT ON COLUMN contacts.phone IS 'Телефон отправителя (опционально)';
COMMENT ON COLUMN contacts.subject IS 'Тема сообщения';
COMMENT ON COLUMN contacts.message IS 'Текст сообщения';
COMMENT ON COLUMN contacts.created_at IS 'Дата и время создания записи'; 
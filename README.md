# CyberX — фронтенд и бэкенд проекта

Полноценный проект с клиентской частью на React (Create React App) и API на Node.js (Express) с базой данных PostgreSQL. Бэкенд обрабатывает форму обратной связи и сохраняет заявки в БД, фронтенд — публичный сайт CyberX.

## Стек технологий
- Фронтенд: React 19 (CRA), React Router, styled-components, axios
- Бэкенд: Node.js, Express, CORS, dotenv, pg
- База данных: PostgreSQL

## Структура репозитория
```
CyberXСайт/
  backend/
    index.js            # Express API (контакты, статус)
    package.json        # Скрипты и зависимости бэкенда
    package-lock.json
    schema.sql          # Схема БД (таблица contacts)
  frontend/
    package.json        # Скрипты и зависимости фронтенда (CRA)
    package-lock.json
    public/
      index.html        # HTML-шаблон
      X.png, manifest.json, ...
    src/
      index.js, App.js  # Точка входа и корневой компонент
      pages/            # Страницы: Home, About, Catalog, Contacts, Partners, CyberBatyr
      components/       # Общие компоненты: Header, Footer, ProductCard
      data/             # Демоданные: catalog.js, news.js
      images/           # Статические изображения
```

## Требования
- Node.js 18+ (рекомендуется LTS)
- npm 8+
- PostgreSQL 13+ (локально или в облаке)

## Установка
Выполните команды один раз для установки зависимостей в обеих частях:

```bash
# 1) Бэкенд
cd CyberXСайт/backend
npm install

# 2) Фронтенд
cd ../frontend
npm install
```

> На Windows используйте терминал PowerShell или cmd. Команды выше типовые.

## Настройка окружения (бэкенд)
Создайте файл `.env` в папке `backend`:

```env
# Сервер
PORT=5000

# Подключение к PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_NAME=cyberx
DB_USER=postgres
DB_PASSWORD=postgres
```

Переменные имеют значения по умолчанию в `index.js`, но рекомендуется задать их явно в `.env`.

## Инициализация базы данных
1. Создайте БД и таблицы с помощью `schema.sql`:
   ```bash
   # Из папки backend или указав полный путь к файлу
   psql -U postgres -h localhost -p 5432 -c "CREATE DATABASE cyberx;"
   psql -U postgres -h localhost -p 5432 -d cyberx -f schema.sql
   ```
   - Понадобится установленный `psql` (клиент PostgreSQL). На Windows ставится вместе с PostgreSQL.
   - Замените пользователя/пароль/порт при необходимости.

2. Проверьте подключение к БД: при старте бэкенд выведет "База данных подключена успешно" либо ошибку.

## Запуск в режиме разработки
Откройте два терминала:

- Терминал 1 — бэкенд:
  ```bash
  cd CyberXСайт/backend
  npm run dev
  # или npm start
  # API: http://localhost:5000
  ```

- Терминал 2 — фронтенд:
  ```bash
  cd CyberXСайт/frontend
  npm start
  # UI: http://localhost:3000
  ```

Фронтенд проксирует запросы на бэкенд (см. `frontend/package.json`: `"proxy": "http://localhost:5000"`).

## Сборка продакшн-версии фронтенда
```bash
cd CyberXСайт/frontend
npm run build
# Готовая сборка будет в папке build/
```

> Деплой фронтенда и бэкенда зависит от вашей инфраструктуры (VPS/PAAS/Docker/Render/Heroku и т.д.).

## API
Базовый URL по умолчанию: `http://localhost:5000`

- POST `/api/contacts`
  - Назначение: сохранить заявку из формы контактов
  - Тело запроса (JSON):
    ```json
    {
      "name": "Иван Иванов",
      "email": "ivan@example.com",
      "phone": "+77001234567",
      "subject": "Вопрос по услугам",
      "message": "Хотим обсудить сотрудничество"
    }
    ```
  - Ответ 201:
    ```json
    {
      "success": true,
      "message": "Сообщение успешно отправлено",
      "contactId": 1
    }
    ```

- GET `/api/status`
  - Проверка состояния API: `{ "status": "API работает" }`

## Полезные скрипты
- Бэкенд (`CyberXСайт/backend/package.json`):
  - `npm start` — запуск сервера Express
  - `npm run dev` — запуск с `nodemon` (перезапуск при изменениях)
- Фронтенд (`CyberXСайт/frontend/package.json`):
  - `npm start` — режим разработки CRA
  - `npm run build` — сборка
  - `npm test` — тесты CRA

## Типичные проблемы и решения
- Не удаётся подключиться к PostgreSQL
  - Проверьте `.env` и доступность хоста/порта.
  - Убедитесь, что база `cyberx` создана и применён `schema.sql`.
- CORS/прокси в разработке
  - Используйте `npm start` во фронтенде — прокси настроен (`http://localhost:5000`).
- Порт занят
  - Поменяйте `PORT` в `.env` бэкенда или другой сервис, занимающий порт.

## Лицензия
- Бэкенд: ISC (см. `backend/package.json`).
- Фронтенд: по умолчанию лицензия вашего проекта; обновите при необходимости.

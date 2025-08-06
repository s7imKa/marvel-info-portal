# Marvel Information Portal

React-додаток для перегляду інформації про персонажів Marvel за допомогою Marvel API.

## 🚀 Технології

- **React 18** - Бібліотека для створення інтерфейсів
- **Vite** - Швидкий збирач та dev-сервер
- **Marvel API** - Офіційний API Marvel для отримання даних
- **SCSS** - Препроцесор CSS для стилізації
- **ESLint** - Лінтер для якості коду

## 📋 Функціональність

- 🎲 Випадковий персонаж Marvel
- 📖 Список персонажів з пагінацією
- 🔍 Детальна інформація про персонажа
- 📱 Адаптивний дизайн
- ⚡ Швидка навігація

## 🛠️ Встановлення та запуск

```bash
# Клонування репозиторію
git clone https://github.com/s7imKa/marvel-info-portal.git

# Перехід в папку проекту
cd marvel-info-portal

# Встановлення залежностей
npm install

# Запуск dev-сервера
npm run dev

# Збірка для продакшну
npm run build
```

## 🔑 Налаштування API

1. Отримайте API ключі на [Marvel Developer Portal](https://developer.marvel.com/)
2. Створіть файл `.env.local` в корені проекту
3. Додайте ваші ключі:

```env
VITE_MARVEL_API_KEY=your_public_key
VITE_MARVEL_PRIVATE_KEY=your_private_key
```

## 🎯 Основні компоненти

- **App** - Головний компонент додатку
- **RandomChar** - Показує випадкового персонажа
- **CharList** - Список персонажів Marvel
- **CharInfo** - Детальна інформація про вибраного персонажа
- **ErrorBoundary** - Обробка помилок

## 📝 Доступні скрипти

- `npm run dev` - Запуск development сервера
- `npm run build` - Збірка для продакшну
- `npm run preview` - Попередній перегляд збірки
- `npm run lint` - Запуск ESLint

## 🤝 Участь у розробці

1. Форкніть репозиторій
2. Створіть нову гілку (`git checkout -b feature/amazing-feature`)
3. Зробіть коміт (`git commit -m 'Add amazing feature'`)
4. Пушніть в гілку (`git push origin feature/amazing-feature`)
5. Відкрийте Pull Request

## 📄 Ліцензія

Цей проект розповсюджується під ліцензією MIT. Дивіться файл `LICENSE` для деталей.

## 🔗 Корисні посилання

- [Marvel API Documentation](https://developer.marvel.com/docs)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

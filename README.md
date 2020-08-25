<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>


## Стек

NestJS, TypeScript, PostgreSQL, TypeORM, GraphQL

## Устанавливаем зависимости

```bash
$ yarn
```
## Перед запуском создаем в корне файл .env

```bash
PORT=3003

DB_TYPE=postgres
DB_HOST=localhost
DB_PORT=5433
DB_USER=<<Пользователь>>
DB_PASS=<<Пароль>>
DB_NAME=<<База данных>>
```

## Запуск

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev
```

## Тесты

```bash
# tests
$ yarn test

```
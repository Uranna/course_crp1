# Практическое задание 7.1

Написание тестов для проекта.

## Описание проекта

Вы разрабатываете приложение для управления списком задач (**Todo App**).

### Функционал:

- Добавление новой задачи
- Отметка задачи как выполненной
- Удаление задачи
- Фильтрация задач (все, активные, выполненные)

## Задание

### 1. Юнит-тесты (Jest + React Testing Library)

Напишите тесты для следующих компонентов:

#### 1.1. Компонент `TodoItem`

- Проверьте, что задача отображается корректно (текст, статус выполнения)
- Проверьте, что кнопка удаления вызывает соответствующий обработчик
- Проверьте, что переключение статуса (выполнено/не выполнено) работает

#### 1.2. Компонент `AddTodo`

- Проверьте, что ввод текста и отправка формы вызывают добавление задачи
- Проверьте, что форма очищается после отправки

### 2. Интеграционные тесты (Jest + RTL + MSW)

Проверьте взаимодействие компонентов и работу с API:

#### 2.1. Интеграция `TodoList` и `TodoItem`

- Проверьте, что список задач корректно отображает переданные задачи
- Проверьте, что изменение статуса задачи в `TodoItem` обновляет состояние в `TodoList`

#### 2.2. Работа с API (Mock Service Worker)

Замокайте API (например, fetch или axios) с помощью MSW.

Проверьте, что:

- При загрузке страницы задачи подгружаются с API
- Добавление новой задачи отправляет запрос к API

### 3. E2E-тесты (Cypress или Playwright)

Напишите сквозные тесты для ключевых сценариев:

#### 3.1. Добавление задачи

1. Пользователь открывает приложение
2. Вводит текст задачи и нажимает "Добавить"
3. Проверяет, что задача появилась в списке

#### 3.2. Удаление задачи

1. Пользователь добавляет задачу
2. Нажимает кнопку удаления
3. Проверяет, что задача исчезла из списка

#### 3.3. Фильтрация задач

1. Пользователь добавляет несколько задач (активные и выполненные)
2. Переключает фильтр "Только активные" — проверяет, что видны только активные задачи
3. Переключает фильтр "Только выполненные" — проверяет, что видны только выполненные задачи.

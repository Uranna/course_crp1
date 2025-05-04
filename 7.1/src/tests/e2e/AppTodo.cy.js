const mockTaskText = 'Read book';
const mockTaskText2 = 'Write code';

describe('Todo App E2E Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Проверка добавления задачи в список', () => {
    // Вводим текст задачи в поле ввода и проверяем, что текст корректно отображается
    cy.get('[data-testid="todo-input"]').type(mockTaskText).should('have.value', mockTaskText);
  
    // Нажимаем кнопку добавления задачи
    cy.get('[data-testid="add-button"]').click();
  
    // Проверяем, что последняя задача в списке содержит добавленный текст
    cy.get('.todo-item').last().should('contain.text', mockTaskText);
  });
  
  it('Проверка удаления задачи из списка', () => {
    // Добавляем задачу для последующего удаления
    cy.get('[data-testid="todo-input"]').type(mockTaskText);
    cy.get('[data-testid="add-button"]').click();
  
    // Находим добавленную задачу и кликаем на кнопку удаления
    cy.get('.todo-item').contains(mockTaskText).siblings('[data-testid^="delete-"]').click();
  
    // Проверяем, что задача больше не отображается в списке
    cy.get('.todo-item').should('not.contain.text', mockTaskText);
  });

  it('Проверка фильтрации задач по статусу (active/completed)', () => {
    // Добавляем первую задачу
    cy.get('[data-testid="todo-input"]').type(mockTaskText);
    cy.get('[data-testid="add-button"]').click();
  
    // Добавляем вторую задачу
    cy.get('[data-testid="todo-input"]').type(mockTaskText2);
    cy.get('[data-testid="add-button"]').click();
  
    // Проверяем, что обе задачи отображаются в списке
    cy.get('.todo-item').should('contain.text', mockTaskText);
    cy.get('.todo-item').should('contain.text', mockTaskText2);
  
    // Отмечаем первую задачу как выполненную
    cy.get('.todo-item').contains(mockTaskText).siblings('[data-testid^="toggle-"]').click();
  
    // Проверяем фильтр "Active"
    cy.get('[data-testid="filter-active"]').click();
    cy.get('[data-testid="filter-active"]').should('have.class', 'active'); // Проверяем активное состояние кнопки
    cy.get('.todo-item').should('not.contain.text', mockTaskText); // Выполненная задача не должна отображаться
    cy.get('.todo-item').should('contain.text', mockTaskText2); // Невыполненная задача должна отображаться
  
    // Проверяем фильтр "Completed"
    cy.get('[data-testid="filter-completed"]').click();
    cy.get('[data-testid="filter-completed"]').should('have.class', 'active'); // Проверяем активное состояние кнопки
    cy.get('[data-testid="filter-active"]').should('not.have.class', 'active'); // Проверяем, что другой фильтр неактивен
    cy.get('.todo-item').should('contain.text', mockTaskText); // Выполненная задача должна отображаться
    cy.get('.todo-item').should('not.contain.text', mockTaskText2); // Невыполненная задача не должна отображаться
  });
});
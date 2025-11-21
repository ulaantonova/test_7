// tests/e2e/local.test.js
const { test, expect } = require('@playwright/test');

// 1. Тест на перевірку функціоналу форми входу
test('Перевірка форми входу', async ({ page }) => {
  // Перейти за адресою 'http://localhost:3000' (Playwright використає baseURL з конфіга)
  await page.goto('/'); 

  // Знайти елемент з id=”username” та ввести “test_user”
  await page.fill('#username', 'test_user');

  // Знайти елемент з id=”password” та ввести “password123”
  await page.fill('#password', 'password123');

  // Знайти елемент з id=”loginButton” та клацнути на нього
  await page.click('#loginButton');

  // Очікувати, що елемент з id=”successMessage” з'явиться (стає видимим)
  await expect(page.locator('#successMessage')).toBeVisible();
});

// 2. Тест на перевірку заголовка сторінки
test('Перевірка заголовка сторінки', async ({ page }) => {
  // Перейти за адресою 'http://localhost:3000'
  await page.goto('/');

  // Перевірити, що заголовок сторінки містить текст 'Локальна сторінка'
  // toHaveTitle приймає регулярний вираз або точний рядок
  await expect(page).toHaveTitle(/Локальна сторінка/);
});

// 3. Тест на перевірку обов’язковості заповнення полів форми
test('Валідація обов’язкових полів форми', async ({ page }) => {
  // Перейти за адресою 'http://localhost:3000'
  await page.goto('/');

  // Клацнути на кнопку 'Увійти' без заповнення полів
  // Це має викликати вбудовану валідацію HTML5 завдяки атрибуту required
  await page.click('#loginButton');

  // Перевірка: Playwright дозволяє перевірити стан елементів DOM
  // Тут ми використовуємо page.evaluate для пошуку елемента з псевдо-класом :invalid
  const error = await page.evaluate(() => document.querySelector(':invalid'));
  
  // Очікуємо, що знайдений елемент НЕ є null (тобто, був знайдений невалідний елемент)
  expect(error).not.toBeNull();
});
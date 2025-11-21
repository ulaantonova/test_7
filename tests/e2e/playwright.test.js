// tests/e2e/playwright.test.js
const { test, expect } = require('@playwright/test');

// 1. Тест на перевірку заголовка сайту
test('Перевірка заголовка сайту', async ({ page }) => {
  // Перейти за адресою 'https://playwright.dev/'
  await page.goto('https://playwright.dev/');
  
  // Очікувати, що заголовок сторінки містить текст 'Playwright'
  await expect(page).toHaveTitle(/Playwright/);
});

// 2. Тест на перевірку наявності меню навігації
test('Перевірка наявності меню навігації', async ({ page }) => {
  // Перейти за адресою 'https://playwright.dev/'
  await page.goto('https://playwright.dev/');
  
  // Знайти елемент з тегом 'nav' на сторінці
  const nav = page.locator('nav');
  
  // Очікувати, що елемент навігації видимий
  await expect(nav).toBeVisible();
});

// 3. Тест на перевірку переходу за посиланням
test('Перевірка перехід за посиланням', async ({ page }) => {
  // Перейти за адресою 'https://playwright.dev/'
  await page.goto('https://playwright.dev/');
  
  // Клацнути на посилання, що містить текст "Get started"
  // Примітка: використовуємо скорочений синтаксис для тексту
  await page.click('text=Get started');
  
  // Очікувати, що URL сторінки містить '/docs/intro/'
  await expect(page).toHaveURL(/docs\/intro/);
});
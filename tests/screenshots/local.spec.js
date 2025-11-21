// tests/screenshots/local.spec.js
const { test, expect } = require('@playwright/test');

// Тест для перевірки змін всієї сторінки
test('Перевірка змін сторінки за скриншотом', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Робить скріншот сторінки та порівнює з взірцем 'index-page.png'.
  // Файли-взірці будуть збережені у tests/screenshots/local.spec.js-snapshots
  expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/index-page.png');
});

// Тест для порівняння скріншота окремого елемента (заголовка h1)
test('Порівняння скриншота елемента', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // Знаходимо елемент 'h1'
  const element = await page.locator('h1');
  // Робить скріншот лише цього елемента та порівнює з взірцем 'index-page-element-h1.png'
  expect(await element.screenshot()).toMatchSnapshot('screenshots/local-page/index-page-element-h1.png');
});
const { test, expect } = require('@playwright/test');

test('should display navbar', async ({ page }) => {
  await page.goto('https://example.com');
  const navbar = await page.$('.navbar');
  expect(navbar).not.toBeNull();
});